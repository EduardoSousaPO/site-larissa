import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTASection from '../components/sections/CTASection';
import SEOHead from '../components/SEOHead';
import {
  buildArticlePath,
  formatCategoryLabel,
  stripHtml,
  type BlogPost,
} from '../lib/blog';
import { DEFAULT_OG_IMAGE, SITE_URL } from '../config/site';
import { createWhatsAppProps } from '../lib/whatsapp';
import {
  getPublishedBlogPostBySlug,
  getRelatedBlogPosts,
} from '../services/blogPosts';
import { trackArticleRead } from '../services/analytics';

type PostLoaderData = { post: BlogPost | null; related: BlogPost[] } | undefined;

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  // Data baked in at build time (SSG) / served as static loader data on the client.
  const loaderData = useLoaderData() as PostLoaderData;
  const [post, setPost] = useState<BlogPost | null>(loaderData?.post ?? null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>(loaderData?.related ?? []);
  const [isLoading, setIsLoading] = useState(!loaderData);
  const [error, setError] = useState<string | null>(
    loaderData && !loaderData.post ? 'Artigo não encontrado.' : null,
  );
  const [hasTrackedRead, setHasTrackedRead] = useState(false);
  const articleContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let active = true;

    const run = async () => {
      if (!slug) {
        if (active) {
          setError('Slug do artigo não informado.');
          setIsLoading(false);
        }
        return;
      }

      try {
        const article = await getPublishedBlogPostBySlug(slug);

        if (!article) {
          throw new Error('Artigo não encontrado.');
        }

        if (!active) {
          return;
        }

        setPost(article);
        setError(null);
        const related = await getRelatedBlogPosts(article.category, article.id);
        if (active) {
          setRelatedPosts(related);
        }
      } catch (err) {
        console.error(err);
        // Keep the pre-rendered article on screen if the live refresh fails.
        if (active && !loaderData?.post) {
          setError(err instanceof Error ? err.message : 'Erro ao carregar o artigo.');
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    void run();

    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  useEffect(() => {
    if (!post || hasTrackedRead) {
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;

      if (height <= 0) {
        return;
      }

      const progress = (scrollTop / height) * 100;

      if (progress >= 75) {
        trackArticleRead(post.id, post.title, post.category);
        setHasTrackedRead(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasTrackedRead, post]);

  useEffect(() => {
    if (!post || !articleContentRef.current) {
      return;
    }

    const contentImages = articleContentRef.current.querySelectorAll('img');

    contentImages.forEach((image) => {
      image.loading = 'lazy';
      image.decoding = 'async';

      if (!image.alt.trim()) {
        image.alt = `Imagem ilustrativa do artigo ${post.title}`;
      }
    });
  }, [post]);

  const shareUrl = post ? `${SITE_URL}${buildArticlePath(post.slug)}` : SITE_URL;
  const inlineWhatsappProps = createWhatsAppProps({
    page: 'blog-article',
    section: 'article-cta',
    message: post
      ? `Olá! Li o artigo "${post.title}" e gostaria de conversar sobre esse tema.`
      : undefined,
  });

  const schema = useMemo(() => {
    if (!post) {
      return undefined;
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.seo_title || post.title,
      description: post.seo_description || post.summary,
      image: post.image_url || DEFAULT_OG_IMAGE,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Dra. Larissa Nunes',
        logo: {
          '@type': 'ImageObject',
          url: DEFAULT_OG_IMAGE,
        },
      },
      datePublished: post.published_at || post.created_at,
      dateModified: post.updated_at,
      articleSection: formatCategoryLabel(post.category),
      keywords: post.tags?.join(', ') || '',
      wordCount: stripHtml(post.content).split(/\s+/).filter(Boolean).length,
      mainEntityOfPage: shareUrl,
      url: shareUrl,
    };
  }, [post, shareUrl]);

  if (isLoading) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center py-20">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-primary-600" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900">{error || 'Artigo não encontrado.'}</h1>
        <Link to="/blog" className="mt-6 inline-flex rounded-full bg-primary-700 px-6 py-3 font-semibold text-white">
          Voltar para o blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={post.seo_title || post.title}
        description={post.seo_description || post.summary}
        path={buildArticlePath(post.slug)}
        type="article"
        image={post.image_url || DEFAULT_OG_IMAGE}
        schema={schema}
      />
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <Link
              to="/blog"
              className="mb-8 inline-flex items-center font-medium text-primary-700 transition hover:text-primary-800"
            >
              Voltar para o blog
            </Link>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-xl"
            >
              <img
                src={post.image_url || DEFAULT_OG_IMAGE}
                alt={`Imagem de capa do artigo ${post.title}`}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="aspect-[16/8] w-full object-cover"
              />

              <div className="mx-auto max-w-3xl px-6 py-10 md:px-10 md:py-14">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                  <span className="rounded-full bg-primary-50 px-3 py-1 font-semibold text-primary-700">
                    {formatCategoryLabel(post.category)}
                  </span>
                  <span>{new Date(post.published_at || post.created_at).toLocaleDateString('pt-BR')}</span>
                  <span>{post.reading_time ?? 1} min de leitura</span>
                  <span>Por {post.author}</span>
                </div>

                <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                  {post.title}
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">{post.summary}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${shareUrl}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white"
                  >
                    Compartilhar no WhatsApp
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
                  >
                    Compartilhar no Facebook
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white"
                  >
                    Compartilhar no LinkedIn
                  </a>
                </div>

                <div ref={articleContentRef} className="article-content mt-10">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <div className="mt-12 rounded-[2rem] bg-primary-50 p-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Se identificou com esse tema?
                  </h2>
                  <p className="mt-4 text-base leading-8 text-gray-700">
                    Se você se reconheceu no que leu, o próximo passo é simples. Me mande uma
                    mensagem no WhatsApp e vamos conversar sobre o que você está sentindo —
                    com calma, sem pressão.
                  </p>
                  <a
                    {...inlineWhatsappProps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-full bg-primary-700 px-6 py-3 font-semibold text-white"
                  >
                    Quero conversar com a Dra. Larissa
                  </a>
                </div>

                {post.tags && post.tags.length > 0 ? (
                  <div className="mt-10 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-stone-100 px-3 py-1 text-sm text-gray-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.article>

            {relatedPosts.length > 0 ? (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900">Artigos relacionados</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.id}
                      to={buildArticlePath(related.slug)}
                      className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <span className="text-sm font-semibold text-primary-700">
                        {formatCategoryLabel(related.category)}
                      </span>
                      <h3 className="mt-3 text-xl font-bold text-gray-900">{related.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-700">{related.summary}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      <CTASection
        page="blog-article"
        message={`Olá! Li o artigo "${post.title}" e gostaria de conversar sobre esse tema.`}
      />
    </>
  );
};

export default PostDetail;
