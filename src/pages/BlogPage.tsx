import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTASection from '../components/sections/CTASection';
import SEOHead from '../components/SEOHead';
import { buildArticlePath, formatCategoryLabel, type BlogPost } from '../lib/blog';
import { DEFAULT_OG_IMAGE } from '../config/site';
import { getPublishedBlogPosts } from '../services/blogPosts';

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState<'all' | BlogPost['category']>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        const data = await getPublishedBlogPosts();
        setPosts(data);
      } catch (err) {
        console.error(err);
        setError('Não foi possível carregar os artigos agora.');
      } finally {
        setIsLoading(false);
      }
    };

    void run();
  }, []);

  const categories = useMemo(() => {
    const values = Array.from(new Set(posts.map((post) => post.category)));
    return values;
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') {
      return posts;
    }

    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  return (
    <>
      <SEOHead
        title="Blog | Emoções, relações e o Método S.E.R."
        description="Artigos da Dra. Larissa Nunes sobre segurança emocional, mágoa acumulada, cansaço emocional, ansiedade, logoterapia e o Método S.E.R. — para mulheres que querem entender o que sentem e construir relações mais leves."
        path="/blog"
        keywords="blog psicologia, método S.E.R., segurança emocional, cansaço emocional, mágoa, ansiedade, logoterapia, terapia para mulher"
      />
      <section className="bg-stone-50 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-700">
              Blog
            </p>
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Para entender o que você sente e construir relações mais leves
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Artigos da Dra. Larissa Nunes sobre segurança emocional, mágoa acumulada, cansaço
              emocional, ansiedade e o Método S.E.R. Conteúdo direto, firme e acolhedor para
              mulheres que se cansaram de se esforçar sem ser vistas.
            </p>
          </motion.div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeCategory === 'all'
                  ? 'bg-primary-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-700'
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === category
                    ? 'bg-primary-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                {formatCategoryLabel(category)}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="flex justify-center py-16">
              <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-primary-600" />
            </div>
          ) : error ? (
            <div className="mt-12 rounded-3xl bg-red-50 p-8 text-center text-red-700">{error}</div>
          ) : filteredPosts.length === 0 ? (
            <div className="mt-12 rounded-3xl bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Em breve, novos conteúdos</h2>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                A Dra. Larissa Nunes está preparando novos artigos sobre o Método S.E.R.,
                relações, segurança emocional e terapia.
              </p>
            </div>
          ) : (
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-lg"
                >
                  <img
                    src={post.image_url || DEFAULT_OG_IMAGE}
                    alt={`Imagem de capa do artigo ${post.title}`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <div className="p-7">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <span className="rounded-full bg-primary-50 px-3 py-1 font-semibold text-primary-700">
                        {formatCategoryLabel(post.category)}
                      </span>
                      <span>
                        {(post.published_at || post.created_at)
                          ? new Date(post.published_at || post.created_at).toLocaleDateString('pt-BR')
                          : ''}
                      </span>
                      <span>{post.reading_time ?? 1} min</span>
                    </div>

                    <h2 className="mt-5 text-2xl font-bold text-gray-900">{post.title}</h2>
                    <p className="mt-4 text-base leading-8 text-gray-700">{post.summary}</p>
                    <Link
                      to={buildArticlePath(post.slug)}
                      className="mt-8 inline-flex items-center font-semibold text-primary-700 transition hover:text-primary-800"
                    >
                      Ler artigo
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
      <CTASection page="blog" />
    </>
  );
};

export default BlogPage;
