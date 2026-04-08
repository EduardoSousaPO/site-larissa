import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import type { BlogCategory, BlogPost, BlogStatus } from '../lib/blog';
import {
  BLOG_CATEGORY_OPTIONS,
  calculateReadingTime,
  ensureSummaryLength,
  formatCategoryLabel,
  getPublishedAt,
  parseTags,
} from '../lib/blog';
import {
  createBlogPost,
  deleteBlogPost,
  ensureUniqueSlug,
  getBlogPostsForAdmin,
  updateBlogPost,
} from '../services/blogPosts';
import type { GeneratedArticle } from '../services/llm';
import { generateArticle, regenerateArticle } from '../services/llm';

type Feedback = {
  type: 'success' | 'error';
  message: string;
};

type EditorState = {
  id?: string;
  title: string;
  summary: string;
  content: string;
  image_url: string;
  category: BlogCategory;
  author: string;
  tags: string;
  seo_title: string;
  seo_description: string;
  status: BlogStatus;
};

const INITIAL_EDITOR: EditorState = {
  title: '',
  summary: '',
  content: '',
  image_url: '',
  category: 'geral',
  author: 'Dra. Larissa Nunes',
  tags: '',
  seo_title: '',
  seo_description: '',
  status: 'draft',
};

const BlogAdmin = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editor, setEditor] = useState<EditorState>(INITIAL_EDITOR);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [aiTopic, setAiTopic] = useState('');
  const [aiFeedback, setAiFeedback] = useState('');
  const [generatedArticle, setGeneratedArticle] = useState<GeneratedArticle | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const run = async () => {
      try {
        const data = await getBlogPostsForAdmin();
        setPosts(data);
      } catch (err) {
        console.error(err);
        setFeedback({
          type: 'error',
          message: 'Nao foi possivel carregar os artigos do blog.',
        });
      } finally {
        setIsLoading(false);
      }
    };

    void run();
  }, []);

  const currentPost = useMemo(
    () => posts.find((post) => post.id === editor.id) ?? null,
    [editor.id, posts],
  );

  function resetEditor() {
    setEditor(INITIAL_EDITOR);
  }

  function startEdit(post: BlogPost) {
    setEditor({
      id: post.id,
      title: post.title,
      summary: post.summary,
      content: post.content,
      image_url: post.image_url ?? '',
      category: post.category,
      author: post.author,
      tags: post.tags?.join(', ') ?? '',
      seo_title: post.seo_title ?? '',
      seo_description: post.seo_description ?? '',
      status: post.status,
    });
    setGeneratedArticle(null);
  }

  async function persistManualPost(nextStatus: BlogStatus) {
    setIsSaving(true);
    setFeedback(null);

    try {
      const slug = await ensureUniqueSlug(editor.title, editor.id);
      const payload = {
        title: editor.title.trim(),
        slug,
        summary: ensureSummaryLength(editor.summary),
        content: editor.content.trim(),
        image_url: editor.image_url.trim() || null,
        category: editor.category,
        tags: parseTags(editor.tags),
        author: editor.author.trim() || 'Dra. Larissa Nunes',
        status: nextStatus,
        reading_time: calculateReadingTime(editor.content),
        seo_title: editor.seo_title.trim() || editor.title.trim(),
        seo_description: ensureSummaryLength(
          editor.seo_description.trim() || editor.summary.trim(),
        ),
        published_at: getPublishedAt(nextStatus, currentPost?.published_at),
      };

      const saved = editor.id
        ? await updateBlogPost(editor.id, payload)
        : await createBlogPost(payload);

      setPosts((previous) => {
        const exists = previous.some((post) => post.id === saved.id);

        if (exists) {
          return previous.map((post) => (post.id === saved.id ? saved : post));
        }

        return [saved, ...previous];
      });

      resetEditor();
      setFeedback({
        type: 'success',
        message: nextStatus === 'published' ? 'Artigo publicado com sucesso.' : 'Rascunho salvo com sucesso.',
      });
    } catch (err) {
      console.error(err);
      setFeedback({
        type: 'error',
        message: err instanceof Error ? err.message : 'Erro ao salvar o artigo.',
      });
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(postId: string) {
    const confirmed = window.confirm('Tem certeza que deseja excluir este artigo?');

    if (!confirmed) {
      return;
    }

    try {
      await deleteBlogPost(postId);
      setPosts((previous) => previous.filter((post) => post.id !== postId));

      if (editor.id === postId) {
        resetEditor();
      }

      setFeedback({
        type: 'success',
        message: 'Artigo excluido com sucesso.',
      });
    } catch (err) {
      console.error(err);
      setFeedback({
        type: 'error',
        message: 'Nao foi possivel excluir o artigo.',
      });
    }
  }

  async function handleGenerate() {
    if (!aiTopic.trim()) {
      setFeedback({
        type: 'error',
        message: 'Informe um tema para gerar o artigo com IA.',
      });
      return;
    }

    setIsGenerating(true);
    setFeedback(null);

    try {
      const article = await generateArticle(aiTopic.trim());
      setGeneratedArticle(article);
      setAiFeedback('');
    } catch (err) {
      console.error(err);
      setFeedback({
        type: 'error',
        message: err instanceof Error ? err.message : 'Falha ao gerar artigo com IA.',
      });
    } finally {
      setIsGenerating(false);
    }
  }

  async function handleRegenerate() {
    if (!generatedArticle || !aiTopic.trim() || !aiFeedback.trim()) {
      setFeedback({
        type: 'error',
        message: 'Informe um ajuste para regenerar o artigo.',
      });
      return;
    }

    setIsGenerating(true);
    setFeedback(null);

    try {
      const article = await regenerateArticle(aiTopic.trim(), aiFeedback.trim(), generatedArticle);
      setGeneratedArticle(article);
      setFeedback({
        type: 'success',
        message: 'Preview ajustado com sucesso. Revise antes de publicar.',
      });
    } catch (err) {
      console.error(err);
      setFeedback({
        type: 'error',
        message: err instanceof Error ? err.message : 'Falha ao ajustar o artigo com IA.',
      });
    } finally {
      setIsGenerating(false);
    }
  }

  async function handleApproveGenerated() {
    if (!generatedArticle) {
      return;
    }

    setIsSaving(true);
    setFeedback(null);

    try {
      const slug = await ensureUniqueSlug(generatedArticle.suggested_slug || generatedArticle.title);
      const saved = await createBlogPost({
        title: generatedArticle.title,
        slug,
        summary: ensureSummaryLength(generatedArticle.summary),
        content: generatedArticle.content,
        image_url: generatedArticle.image_url || null,
        category: generatedArticle.category,
        tags: generatedArticle.tags,
        author: 'Dra. Larissa Nunes',
        status: 'published',
        reading_time: calculateReadingTime(generatedArticle.content),
        seo_title: generatedArticle.seo_title,
        seo_description: ensureSummaryLength(generatedArticle.seo_description),
        published_at: new Date().toISOString(),
      });

      setPosts((previous) => [saved, ...previous]);
      setGeneratedArticle(null);
      setAiTopic('');
      setAiFeedback('');
      setFeedback({
        type: 'success',
        message: 'Artigo gerado pela IA publicado com aprovacao explicita.',
      });
    } catch (err) {
      console.error(err);
      setFeedback({
        type: 'error',
        message: err instanceof Error ? err.message : 'Nao foi possivel publicar o artigo gerado.',
      });
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className="min-h-screen bg-stone-50 py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-700">
            Admin blog
          </p>
          <h1 className="mt-3 text-4xl font-bold text-gray-900">Painel de artigos</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">
            Crie rascunhos, publique artigos e use a geracao com IA apenas com revisao humana.
          </p>
        </motion.div>

        {feedback ? (
          <div
            className={`mb-6 rounded-2xl px-5 py-4 text-sm ${
              feedback.type === 'success'
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red-700'
            }`}
          >
            {feedback.message}
          </div>
        ) : null}

        <div className="grid gap-8 xl:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {editor.id ? 'Editar artigo' : 'Novo artigo manual'}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Slug e tempo de leitura sao calculados automaticamente ao salvar.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetEditor}
                  className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-stone-50"
                >
                  Limpar
                </button>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <label className="text-sm font-medium text-gray-700">
                  Titulo
                  <input
                    value={editor.title}
                    onChange={(event) => setEditor((prev) => ({ ...prev, title: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3"
                  />
                </label>

                <label className="text-sm font-medium text-gray-700">
                  Categoria
                  <select
                    value={editor.category}
                    onChange={(event) =>
                      setEditor((prev) => ({ ...prev, category: event.target.value as BlogCategory }))
                    }
                    className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3"
                  >
                    {BLOG_CATEGORY_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="text-sm font-medium text-gray-700 md:col-span-2">
                  Resumo
                  <textarea
                    value={editor.summary}
                    onChange={(event) => setEditor((prev) => ({ ...prev, summary: event.target.value }))}
                    rows={3}
                    className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3"
                  />
                </label>

                <label className="text-sm font-medium text-gray-700 md:col-span-2">
                  Conteudo HTML
                  <textarea
                    value={editor.content}
                    onChange={(event) => setEditor((prev) => ({ ...prev, content: event.target.value }))}
                    rows={12}
                    className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 font-mono text-sm"
                  />
                </label>

                <label className="text-sm font-medium text-gray-700">
                  URL da imagem
                  <input
                    value={editor.image_url}
                    onChange={(event) => setEditor((prev) => ({ ...prev, image_url: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3"
                  />
                </label>

                <label className="text-sm font-medium text-gray-700">
                  Autor
                  <input
                    value={editor.author}
                    onChange={(event) => setEditor((prev) => ({ ...prev, author: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3"
                  />
                </label>

                <label className="text-sm font-medium text-gray-700">
                  Tags
                  <input
                    value={editor.tags}
                    onChange={(event) => setEditor((prev) => ({ ...prev, tags: event.target.value }))}
                    placeholder="logoterapia, sentido, ansiedade"
                    className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3"
                  />
                </label>

                <label className="text-sm font-medium text-gray-700">
                  Status
                  <select
                    value={editor.status}
                    onChange={(event) =>
                      setEditor((prev) => ({ ...prev, status: event.target.value as BlogStatus }))
                    }
                    className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3"
                  >
                    <option value="draft">Rascunho</option>
                    <option value="published">Publicado</option>
                  </select>
                </label>

                <label className="text-sm font-medium text-gray-700">
                  SEO title
                  <input
                    value={editor.seo_title}
                    onChange={(event) => setEditor((prev) => ({ ...prev, seo_title: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3"
                  />
                </label>

                <label className="text-sm font-medium text-gray-700">
                  SEO description
                  <textarea
                    value={editor.seo_description}
                    onChange={(event) =>
                      setEditor((prev) => ({ ...prev, seo_description: event.target.value }))
                    }
                    rows={3}
                    className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3"
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={isSaving}
                  onClick={() => void persistManualPost('draft')}
                  className="rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-stone-50 disabled:opacity-60"
                >
                  {isSaving ? 'Salvando...' : 'Salvar rascunho'}
                </button>
                <button
                  type="button"
                  disabled={isSaving}
                  onClick={() => void persistManualPost('published')}
                  className="rounded-full bg-primary-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-800 disabled:opacity-60"
                >
                  {isSaving ? 'Publicando...' : 'Publicar'}
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Novo artigo com IA</h2>
              <p className="mt-2 text-sm text-gray-600">
                A IA gera um preview. Nada e publicado sem o clique explicito em "Aprovar e publicar".
              </p>

              <label className="mt-6 block text-sm font-medium text-gray-700">
                Tema ou prompt
                <textarea
                  value={aiTopic}
                  onChange={(event) => setAiTopic(event.target.value)}
                  rows={3}
                  className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3"
                  placeholder="Ex.: Crise existencial: o que e e como a Logoterapia pode ajudar"
                />
              </label>

              <div className="mt-5">
                <button
                  type="button"
                  disabled={isGenerating}
                  onClick={() => void handleGenerate()}
                  className="rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black disabled:opacity-60"
                >
                  {isGenerating ? 'Gerando preview...' : 'Gerar preview com IA'}
                </button>
              </div>

              {generatedArticle ? (
                <div className="mt-8 space-y-6 rounded-[2rem] bg-stone-50 p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-700">
                      Preview gerado
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-gray-900">{generatedArticle.title}</h3>
                    <p className="mt-3 text-base leading-8 text-gray-700">{generatedArticle.summary}</p>
                  </div>

                  {generatedArticle.image_url ? (
                    <div className="overflow-hidden rounded-[1.5rem]">
                      <img
                        src={generatedArticle.image_url}
                        alt={`Capa: ${generatedArticle.title}`}
                        className="w-full object-cover"
                        style={{ aspectRatio: '16/9' }}
                      />
                    </div>
                  ) : null}

                  <div className="rounded-[1.5rem] bg-white p-5">
                    <div className="article-content" dangerouslySetInnerHTML={{ __html: generatedArticle.content }} />
                  </div>

                  <div className="rounded-[1.5rem] border border-stone-200 bg-white p-5 text-sm text-gray-700">
                    <p>
                      <strong>Categoria:</strong> {formatCategoryLabel(generatedArticle.category)}
                    </p>
                    <p className="mt-2">
                      <strong>Tags:</strong> {generatedArticle.tags.join(', ') || '—'}
                    </p>
                    <p className="mt-2">
                      <strong>Slug sugerido:</strong> {generatedArticle.suggested_slug}
                    </p>
                  </div>

                  <label className="block text-sm font-medium text-gray-700">
                    Solicitar ajustes
                    <textarea
                      value={aiFeedback}
                      onChange={(event) => setAiFeedback(event.target.value)}
                      rows={3}
                      className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3"
                      placeholder="Ex.: deixe o tom mais direto e reforce a secao Como a Logoterapia ajuda"
                    />
                  </label>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      disabled={isGenerating}
                      onClick={() => void handleRegenerate()}
                      className="rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-white disabled:opacity-60"
                    >
                      Solicitar ajustes
                    </button>
                    <button
                      type="button"
                      disabled={isSaving}
                      onClick={() => void handleApproveGenerated()}
                      className="rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700 disabled:opacity-60"
                    >
                      Aprovar e publicar
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Artigos existentes</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Lista com titulo, status e data para edicao rapida.
                </p>
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center py-16">
                <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-primary-600" />
              </div>
            ) : posts.length === 0 ? (
              <div className="mt-8 rounded-2xl bg-stone-50 p-8 text-center text-gray-600">
                Nenhum artigo cadastrado ainda.
              </div>
            ) : (
              <div className="mt-8 space-y-4">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="rounded-[1.5rem] border border-stone-200 p-5 transition hover:border-primary-200"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-bold text-gray-900">{post.title}</h3>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              post.status === 'published'
                                ? 'bg-green-50 text-green-700'
                                : 'bg-amber-50 text-amber-700'
                            }`}
                          >
                            {post.status === 'published' ? 'Publicado' : 'Rascunho'}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          {formatCategoryLabel(post.category)} ·{' '}
                          {new Date(post.published_at || post.created_at).toLocaleDateString('pt-BR')}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => startEdit(post)}
                          className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-stone-50"
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          onClick={() => void handleDelete(post.id)}
                          className="rounded-full border border-red-200 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50"
                        >
                          Excluir
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAdmin;
