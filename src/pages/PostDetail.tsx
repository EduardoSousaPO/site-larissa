import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../services/supabase';
import { Helmet } from 'react-helmet-async';

// Tipos
interface BlogPost {
  id: string;
  titulo: string;
  resumo: string;
  conteudo: string;
  imagem: string;
  categoria: string;
  dataCriacao: Date;
  autor: string;
  tags: string[];
}

const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!postId) {
          throw new Error('ID do post não especificado');
        }

        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('id', postId)
          .single();
        
        if (error) throw error;
        if (!data) throw new Error('Post não encontrado');

        setPost({
          id: data.id,
          titulo: data.titulo,
          resumo: data.resumo,
          conteudo: data.conteudo,
          imagem: data.imagem,
          categoria: data.categoria,
          dataCriacao: new Date(data.data_criacao),
          autor: data.autor,
          tags: data.tags || []
        });
      } catch (err) {
        console.error('Erro ao buscar post:', err);
        setError(err instanceof Error ? err.message : 'Erro ao carregar o conteúdo');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  // Criar o schema BlogPosting/Article para SEO
  const generateBlogPostingSchema = (post: BlogPost) => {
    const websiteUrl = window.location.origin;
    const articleUrl = `${websiteUrl}/blog/${post.id}`;
    
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.titulo,
      "description": post.resumo,
      "image": post.imagem,
      "author": {
        "@type": "Person",
        "name": post.autor || "Dra. Larissa Nunes"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Dra. Larissa Nunes - Psicóloga",
        "logo": {
          "@type": "ImageObject",
          "url": `${websiteUrl}/images/logo.png`
        }
      },
      "datePublished": post.dataCriacao.toISOString(),
      "dateModified": post.dataCriacao.toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": articleUrl
      },
      "keywords": post.tags.join(", "),
      "articleSection": post.categoria,
      "url": articleUrl
    };
  };

  if (isLoading) {
    return (
      <div className="container py-20 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl text-gray-700 mb-4">{error || 'Erro ao carregar o post'}</h1>
        <Link to="/blog" className="btn btn-primary">
          Voltar para o Blog
        </Link>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50 min-h-screen">
      <Helmet>
        <title>{post.titulo} | Dra. Larissa Nunes - Psicóloga</title>
        <meta name="description" content={post.resumo} />
        {/* OpenGraph metatags para compartilhamento em redes sociais */}
        <meta property="og:title" content={post.titulo} />
        <meta property="og:description" content={post.resumo} />
        <meta property="og:image" content={post.imagem} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        {/* JSON-LD para dados estruturados */}
        <script type="application/ld+json">
          {JSON.stringify(generateBlogPostingSchema(post))}
        </script>
      </Helmet>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para o Blog
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-64 md:h-[32rem] w-full overflow-hidden bg-gray-100">
              <img 
                src={post.imagem || "https://via.placeholder.com/1200x600/9932CC/FFFFFF?text=Psicologia+e+Logoterapia"} 
                alt={post.titulo}
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="p-8 md:p-12 lg:p-16">
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-3 mb-8 text-sm">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 font-semibold rounded-full">
                  {post.categoria}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">
                  {post.dataCriacao.toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">
                  Por {post.autor || 'Dra. Larissa Nunes'}
                </span>
              </div>
              
              {/* Título */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                {post.titulo}
              </h1>
              
              {/* Conteúdo do artigo com estilos customizados */}
              <div className="article-content">
                <div dangerouslySetInnerHTML={{ __html: post.conteudo }} />
              </div>
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-base font-semibold text-gray-900 mb-4">
                    Tags relacionadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <Link 
                        key={tag} 
                        to={`/blog?tag=${tag}`}
                        className="px-4 py-2 bg-gray-100 hover:bg-primary-100 hover:text-primary-700 text-gray-700 text-sm font-medium rounded-full transition-all duration-200"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Compartilhar */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-base font-semibold text-gray-900 mb-4">
                  Compartilhe este artigo
                </h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                    aria-label="Compartilhar no Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                    Facebook
                  </button>
                  
                  <button
                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${post.titulo}&url=${window.location.href}`, '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                    aria-label="Compartilhar no Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    Twitter
                  </button>
                  
                  <button
                    onClick={() => window.open(`https://wa.me/?text=${post.titulo} ${window.location.href}`, '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                    aria-label="Compartilhar no WhatsApp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </button>
                  
                  <button
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                    aria-label="Compartilhar no LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </button>
                </div>
              </div>
              
              {/* CTA para agendar sessão */}
              <div className="mt-12 bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl border border-primary-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Quer conversar sobre este tema?
                </h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Agende uma sessão com a Dra. Larissa Nunes e receba auxílio profissional 
                  para questões relacionadas à sua saúde mental e bem-estar emocional.
                </p>
                <Link 
                  to="/agendamento" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Agendar Sessão
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PostDetail; 