import { INFSH_API_KEY, LLM_API_KEY, LLM_MODEL, LLM_PROVIDER } from '../config/site';
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
  image_url?: string;
}

const BLOG_SYSTEM_PROMPT = `Você escreve artigos para o blog da Dra. Larissa Nunes, psicóloga clínica, criadora do Método S.E.R. — Segurança Emocional Reconstruída.

Público-alvo: majoritariamente mulheres que se sentem não vistas, guardam mágoa, se esforçam e não recebem, explodem e depois se culpam, estão emocionalmente cansadas. Fale com essa dor diretamente.

Regras obrigatórias:
- Responda SOMENTE com JSON válido (sem texto antes ou depois).
- O JSON deve conter: title, summary, content, seo_title, seo_description, category, tags, suggested_slug.
- category deve ser uma entre: logoterapia, ansiedade, depressao, proposito, vocacional, geral (slugs sem acento).
- O artigo deve ser em português do Brasil com acentuação correta.
- Tom: direto, firme e acolhedor (sem autoajuda, sem pieguice, sem corporativo).
- Comece pela dor real da leitora e explique conceitos em linguagem simples.
- Inclua ao menos uma seção com definição clara que LLMs possam citar.
- Sempre que fizer sentido, conecte com o Método S.E.R. (Sentir com consciência, Entender a origem, Responder com intenção).
- O content deve ser HTML válido com h2, p, ul e li quando fizer sentido.
- Inclua CTA final para WhatsApp com a Dra. Larissa Nunes.
- summary e seo_description devem ficar entre 50 e 155 caracteres.
- suggested_slug deve ser curto, sem acentos e com hifens.`;

function assertConfig() {
  if (!LLM_API_KEY) {
    throw new Error('Configure VITE_LLM_API_KEY para usar a geração com IA.');
  }

  if (!LLM_MODEL) {
    throw new Error('Configure VITE_LLM_MODEL para usar a geração com IA.');
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

  throw new Error('A resposta do modelo não veio em JSON válido.');
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
    throw new Error('A resposta da IA não trouxe todos os campos obrigatórios.');
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
    parts.push(`Versão anterior do título: ${previousArticle.title}`);
    parts.push(`Versão anterior do resumo: ${previousArticle.summary}`);
  }

  if (feedback) {
    parts.push(`Ajustes solicitados: ${feedback}`);
  }

  return parts.join('\n');
}

// ---------------------------------------------------------------------------
// Inference.sh — geração de imagem de capa
// ---------------------------------------------------------------------------

const INFSH_BASE = 'https://api.inference.sh';
const INFSH_IMAGE_MODEL = 'pruna/p-image';
const INFSH_POLL_INTERVAL = 2000;
const INFSH_MAX_POLLS = 30; // 60 segundos max

function buildImagePrompt(title: string, category: string): string {
  const themePool: Record<string, string[]> = {
    logoterapia: [
      'cozy therapy room with leather armchair, warm lamp light, bookshelf with old books, indoor plants',
      'open journal on wooden desk next to a cup of tea, morning sunlight through curtains, peaceful study',
      'a lighthouse on a calm coast at golden hour, guiding light, sense of direction',
      'stacked stones balanced on a beach at sunrise, zen, equilibrium, calm ocean background',
      'an open road through green fields leading to distant mountains, journey, purpose',
    ],
    ansiedade: [
      'misty forest path with sunlight breaking through tall trees, tranquility, fresh air',
      'hands holding a warm cup of herbal tea, cozy blanket, rainy window background, comfort',
      'calm turquoise ocean seen from above, gentle waves, aerial photography, vastness',
      'lavender field at sunset, soft purple tones, gentle breeze, rural landscape',
      'person silhouette sitting under a large tree in open meadow, solitude, peace, wide angle',
    ],
    depressao: [
      'sunrise breaking through dark storm clouds over a valley, hope after darkness',
      'single candle flame glowing in a dim room, warmth, small light in darkness',
      'spring flowers blooming through cracks in concrete, resilience, new life',
      'morning dew on grass with soft bokeh sunlight, new day, fresh start',
      'bird flying over calm water at dawn, freedom, new beginning, pastel sky colors',
    ],
    proposito: [
      'compass on an old wooden map, adventure, direction, warm vintage tones',
      'winding trail through autumn forest with golden leaves, the path ahead',
      'telescope pointing at starry night sky, searching, wonder, exploration',
      'seeds sprouting in rich dark soil, growth, potential, close-up macro photography',
      'bridge over a deep valley connecting two cliffs, crossing, connection, aerial view',
    ],
    vocacional: [
      'multiple colorful doors in a white corridor, choices, possibilities, surreal',
      'artist studio with paintbrushes and canvases, creativity, vocation, natural light',
      'fork in a forest trail with two distinct paths, decision, autumn setting',
      'hand planting a small tree sapling, nurturing, building something meaningful',
      'old library with tall bookshelves and warm reading lights, knowledge, discovery',
    ],
    geral: [
      'minimalist zen garden with raked sand and stones, simplicity, balance',
      'window with sheer white curtains blowing gently, fresh air, light, openness',
      'watercolor palette with soft pastel colors, creativity, expression, artistic',
      'mountain lake reflection at golden hour, mirror water, symmetry, peace',
      'indoor green plants in ceramic pots on wooden shelves, wellness, nurture',
    ],
  };

  const pool = themePool[category] || themePool.geral;
  const randomTheme = pool[Math.floor(Math.random() * pool.length)];

  const styles = [
    'professional editorial photography, high quality, realistic',
    'cinematic photography, shallow depth of field, film grain',
    'fine art photography, soft natural light, muted tones',
    'documentary style photography, authentic, natural lighting',
    'minimalist photography, clean composition, elegant',
  ];
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];

  return `${randomTheme}. ${randomStyle}. IMPORTANT: absolutely no text, no words, no letters, no watermarks, no titles, no captions anywhere in the image.`;
}

async function generateCoverImage(title: string, category: string): Promise<string | undefined> {
  if (!INFSH_API_KEY) {
    return undefined;
  }

  try {
    // 1. Criar task
    const createRes = await fetch(`${INFSH_BASE}/apps/run`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${INFSH_API_KEY}`,
      },
      body: JSON.stringify({
        app: INFSH_IMAGE_MODEL,
        input: {
          prompt: buildImagePrompt(title, category),
          aspect_ratio: '16:9',
        },
      }),
    });

    if (!createRes.ok) {
      console.warn('Falha ao criar task de imagem:', createRes.status);
      return undefined;
    }

    const createData = await createRes.json();
    const taskId = createData.data?.id;

    if (!taskId) {
      return undefined;
    }

    // 2. Polling ate completar
    for (let i = 0; i < INFSH_MAX_POLLS; i++) {
      await new Promise((r) => setTimeout(r, INFSH_POLL_INTERVAL));

      const pollRes = await fetch(`${INFSH_BASE}/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${INFSH_API_KEY}` },
      });

      if (!pollRes.ok) {
        continue;
      }

      const pollData = await pollRes.json();
      const status = pollData.data?.status;

      // status 10 = complete
      if (status === 10 && pollData.data?.output?.image) {
        return pollData.data.output.image as string;
      }

      // status >= 20 = erro
      if (status >= 20) {
        console.warn('Task de imagem falhou com status:', status);
        return undefined;
      }
    }

    console.warn('Timeout ao gerar imagem de capa');
    return undefined;
  } catch (err) {
    console.warn('Erro ao gerar imagem de capa:', err);
    return undefined;
  }
}

// ---------------------------------------------------------------------------
// Funcoes publicas
// ---------------------------------------------------------------------------

export async function generateArticle(
  topic: string,
  provider: 'claude' | 'openai' | 'groq' = LLM_PROVIDER,
): Promise<GeneratedArticle> {
  assertConfig();
  const prompt = buildPrompt(topic);

  let article: GeneratedArticle;

  if (provider === 'claude') {
    article = await callAnthropic(prompt);
  } else if (provider === 'groq') {
    article = await callOpenAICompatible(prompt, 'https://api.groq.com/openai/v1');
  } else {
    article = await callOpenAICompatible(prompt, 'https://api.openai.com/v1');
  }

  // Gerar imagem de capa em paralelo (nao bloqueia se falhar)
  const imageUrl = await generateCoverImage(article.title, article.category);

  if (imageUrl) {
    article.image_url = imageUrl;
  }

  return article;
}

export async function regenerateArticle(
  topic: string,
  feedback: string,
  previousArticle: GeneratedArticle,
): Promise<GeneratedArticle> {
  assertConfig();
  const prompt = buildPrompt(topic, feedback, previousArticle);

  let article: GeneratedArticle;

  if (LLM_PROVIDER === 'claude') {
    article = await callAnthropic(prompt);
  } else if (LLM_PROVIDER === 'groq') {
    article = await callOpenAICompatible(prompt, 'https://api.groq.com/openai/v1');
  } else {
    article = await callOpenAICompatible(prompt, 'https://api.openai.com/v1');
  }

  // Regerar imagem tambem
  const imageUrl = await generateCoverImage(article.title, article.category);

  if (imageUrl) {
    article.image_url = imageUrl;
  }

  return article;
}
