import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../services/firebase';

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

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, 'blog_posts'), orderBy('dataCriacao', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const postsList: BlogPost[] = [];
        const categoriasSet = new Set<string>();
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const post: BlogPost = {
            id: doc.id,
            titulo: data.titulo,
            resumo: data.resumo,
            conteudo: data.conteudo,
            imagem: data.imagem,
            categoria: data.categoria,
            dataCriacao: data.dataCriacao.toDate(),
            autor: data.autor,
            tags: data.tags || []
          };
          
          postsList.push(post);
          categoriasSet.add(data.categoria);
        });
        
        setPosts(postsList);
        setCategorias(Array.from(categoriasSet));
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filtrar posts por categoria
  const postsFiltrados = categoriaAtiva === 'Todos'
    ? posts
    : posts.filter(post => post.categoria === categoriaAtiva);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog da Dra. Larissa
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Artigos, reflexões e dicas sobre psicologia, logoterapia e saúde mental para seu crescimento pessoal.
          </p>
        </motion.div>

        {/* Filtro de categorias */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setCategoriaAtiva('Todos')}
            className={`px-4 py-2 rounded-full transition-colors ${
              categoriaAtiva === 'Todos'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            Todos
          </button>
          
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-4 py-2 rounded-full transition-colors ${
                categoriaAtiva === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : postsFiltrados.length === 0 ? (
          <div className="text-center py-10">
            <h3 className="text-xl text-gray-600">Nenhum artigo encontrado nesta categoria.</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsFiltrados.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imagem || "https://via.placeholder.com/800x450/9932CC/FFFFFF?text=Psicologia+e+Logoterapia"} 
                    alt={post.titulo}
                    className="w-full h-full object-cover transition-transform hover:scale-105" 
                  />
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-sm text-primary-600 font-medium mb-2">
                    {post.categoria}
                  </span>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {post.titulo}
                  </h2>
                  
                  <p className="text-gray-700 mb-4 flex-grow">
                    {post.resumo}
                  </p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">
                      {post.dataCriacao.toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary-600 font-medium hover:text-primary-800 transition-colors"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* SEO section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span className="text-primary-600">Logoterapia</span> e Psicologia Clínica
          </h2>
          <p className="text-gray-700 mb-4">
            Neste blog, a Dra. Larissa Nunes compartilha insights sobre Logoterapia, a abordagem terapêutica 
            desenvolvida por Viktor Frankl que considera a busca de sentido para a vida como a principal força 
            motivadora do ser humano. Encontre artigos sobre ansiedade, depressão, relacionamentos, propósito 
            de vida e crescimento pessoal.
          </p>
          <p className="text-gray-700">
            Como psicóloga clínica especializada em Logoterapia e atendimento a adultos e adolescentes em 
            Goiânia e online, Dra. Larissa oferece conteúdo baseado em sua experiência clínica e formação 
            acadêmica para ajudá-lo em sua jornada de autoconhecimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPage; 