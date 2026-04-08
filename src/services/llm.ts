import { LLM_API_KEY, LLM_MODEL, LLM_PROVIDER } from '../config/site';
import { slugify, type BlogCategory } from '../lib/blog';

export interface GeneratedArticle {
  title: string;
  summary: string;
  content: string;
  seo_title: string;
  seo_description: string;
  category: BlogCategory;
  tags: string[];
  suggested_slug: string;
}

const BLOG_SYSTEM_PROMPT = `Voce escreve artigos para o blog da Dra. Larissa Nunes, psicologa especializada em Logoterapia.

Regras obrigatorias:
- Responda SOMENTE com JSON valido.
- O JSON deve conter: title, summary, content, seo_title, seo_description, category, tags, suggested_slug.
- category deve ser uma entre: logoterapia, ansiedade, depressao, proposito, vocacional, geral.
- O artigo deve ser em portugues do Brasil.
- O tom deve ser educativo, firme e acolhedor.
- Comece pela dor real do leitor e explique conceitos em linguagem simples.
- Inclua pelo menos uma secao com definicao clara que LLMs possam citar.
- Inclua a secao "Como a Logoterapia ajuda".
- O content deve ser HTML valido com h2, p, ul e li quando fizer sentido.
- Inclua CTA final para WhatsApp com a Dra. Larissa Nunes.
- summary e seo_description devem ficar entre 50 e 155 caracteres.
- suggested_slug deve ser curto, sem acentos e com hifens.`;

function assertConfig() {
  if (!LLM_API_KEY) {
    throw new Error('Configure VITE_LLM_API_KEY para usar a geracao com IA.');
  }

  if (!LLM_MODEL) {
    throw new Error('Configure VITE_LLM_MODEL para usar a geracao com IA.');
  }
}

function extractTextFromOpenAI(payload: any) {
  if (payload.choices?.[0]?.message?.content) {
    return payload.choices[0].message.content as string;
  }

  if (Array.isArray(payload.output)) {
    return payload.output
      .flatMap((item: any) => item.content ?? [])
      .map((item: any) => item.text ?? '')
      .join('');
  }

  return '';
}

function extractTextFromAnthropic(payload: any) {
  if (!Array.isArray(payload.content)) {
    return '';
  }

  return payload.content.map((item: any) => item.text ?? '').join('');
}

function extractJson(text: string) {
  const trimmed = text.trim();

  if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
    return JSON.parse(trimmed);
  }

  const start = trimmed.indexOf('{');
  const end = trimmed.lastIndexOf('}');

  if (start >= 0 && end > start) {
    return JSON.parse(trimmed.slice(start, end + 1));
  }

  throw new Error('A resposta do modelo nao veio em JSON valido.');
}

function normalizeCategory(value: string): BlogCategory {
  const normalized = value?.toLowerCase().trim();

  if (
    normalized === 'logoterapia' ||
    normalized === 'ansiedade' ||
    normalized === 'depressao' ||
    normalized === 'proposito' ||
    normalized === 'vocacional' ||
    normalized === 'geral'
  ) {
    return normalized;
  }

  return 'geral';
}

function normalizeArticle(payload: any): GeneratedArticle {
  const title = String(payload.title ?? '').trim();
  const summary = String(payload.summary ?? '').trim();
  const content = String(payload.content ?? '').trim();
  const seoTitle = String(payload.seo_title ?? title).trim();
  const seoDescription = String(payload.seo_description ?? summary).trim();
  const tags = Array.isArray(payload.tags)
    ? payload.tags.map((tag) => String(tag).trim()).filter(Boolean)
    : [];

  if (!title || !summary || !content) {
    throw new Error('A resposta da IA nao trouxe todos os campos obrigatorios.');
  }

  return {
    title,
    summary,
    content,
    seo_title: seoTitle,
    seo_description: seoDescription,
    category: normalizeCategory(String(payload.category ?? 'geral')),
    tags,
    suggested_slug: slugify(String(payload.suggested_slug ?? title)),
  };
}

async function callOpenAICompatible(topicPrompt: string, apiBaseUrl: string) {
  const response = await fetch(`${apiBaseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${LLM_API_KEY}`,
    },
    body: JSON.stringify({
      model: LLM_MODEL,
      temperature: 0.7,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: BLOG_SYSTEM_PROMPT },
        { role: 'user', content: topicPrompt },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Falha ao gerar artigo (${response.status}).`);
  }

  const payload = await response.json();
  return normalizeArticle(extractJson(extractTextFromOpenAI(payload)));
}

async function callAnthropic(topicPrompt: string) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': LLM_API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: LLM_MODEL,
      max_tokens: 4000,
      system: BLOG_SYSTEM_PROMPT,
      messages: [{ role: 'user', content: topicPrompt }],
    }),
  });

  if (!response.ok) {
    throw new Error(`Falha ao gerar artigo (${response.status}).`);
  }

  const payload = await response.json();
  return normalizeArticle(extractJson(extractTextFromAnthropic(payload)));
}

function buildPrompt(topic: string, feedback?: string, previousArticle?: GeneratedArticle) {
  const parts = [
    `Tema principal: ${topic}`,
    'Entregue um artigo completo para o blog da Dra. Larissa Nunes.',
  ];

  if (previousArticle) {
    parts.push(`Versao anterior do titulo: ${previousArticle.title}`);
    parts.push(`Versao anterior do resumo: ${previousArticle.summary}`);
  }

  if (feedback) {
    parts.push(`Ajustes solicitados: ${feedback}`);
  }

  return parts.join('\n');
}

export async function generateArticle(
  topic: string,
  provider: 'claude' | 'openai' | 'groq' = LLM_PROVIDER,
): Promise<GeneratedArticle> {
  assertConfig();
  const prompt = buildPrompt(topic);

  if (provider === 'claude') {
    return callAnthropic(prompt);
  }

  if (provider === 'groq') {
    return callOpenAICompatible(prompt, 'https://api.groq.com/openai/v1');
  }

  return callOpenAICompatible(prompt, 'https://api.openai.com/v1');
}

export async function regenerateArticle(
  topic: string,
  feedback: string,
  previousArticle: GeneratedArticle,
): Promise<GeneratedArticle> {
  assertConfig();
  const prompt = buildPrompt(topic, feedback, previousArticle);

  if (LLM_PROVIDER === 'claude') {
    return callAnthropic(prompt);
  }

  if (LLM_PROVIDER === 'groq') {
    return callOpenAICompatible(prompt, 'https://api.groq.com/openai/v1');
  }

  return callOpenAICompatible(prompt, 'https://api.openai.com/v1');
}
