import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc, updateDoc, deleteDoc, getDocs, doc, serverTimestamp } from 'firebase/firestore';
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

interface FormBlogPost {
  id?: string;
  titulo: string;
  resumo: string;
  conteudo: string;
  imagem: string;
  categoria: string;
  autor: string;
  tags: string;
}

const BlogAdmin = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [formData, setFormData] = useState<FormBlogPost>({
    titulo: '',
    resumo: '',
    conteudo: '',
    imagem: '',
    categoria: '',
    autor: 'Dra. Larissa Nunes',
    tags: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [feedback, setFeedback] = useState<{ tipo: 'sucesso' | 'erro', mensagem: string } | null>(null);

  // Buscar posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blog_posts'));
        
        const postsList: BlogPost[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          postsList.push({
            id: doc.id,
            titulo: data.titulo,
            resumo: data.resumo,
            conteudo: data.conteudo,
            imagem: data.imagem,
            categoria: data.categoria,
            dataCriacao: data.dataCriacao.toDate(),
            autor: data.autor || 'Dra. Larissa Nunes',
            tags: data.tags || []
          });
        });
        
        // Ordenar por data (mais recentes primeiro)
        postsList.sort((a, b) => b.dataCriacao.getTime() - a.dataCriacao.getTime());
        
        setPosts(postsList);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
        setFeedback({
          tipo: 'erro',
          mensagem: 'Erro ao carregar os posts. Por favor, recarregue a página.'
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Manipuladores de formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      titulo: '',
      resumo: '',
      conteudo: '',
      imagem: '',
      categoria: '',
      autor: 'Dra. Larissa Nunes',
      tags: ''
    });
    setIsEditing(false);
  };

  const editPost = (post: BlogPost) => {
    setFormData({
      id: post.id,
      titulo: post.titulo,
      resumo: post.resumo,
      conteudo: post.conteudo,
      imagem: post.imagem,
      categoria: post.categoria,
      autor: post.autor,
      tags: post.tags.join(', ')
    });
    setIsEditing(true);
  };

  const deletePost = async (postId: string) => {
    if (!window.confirm('Tem certeza que deseja excluir este post? Esta ação não pode ser desfeita.')) {
      return;
    }
    
    try {
      await deleteDoc(doc(db, 'blog_posts', postId));
      
      // Atualizar lista local
      setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
      
      setFeedback({
        tipo: 'sucesso',
        mensagem: 'Post excluído com sucesso!'
      });
    } catch (error) {
      console.error('Erro ao excluir post:', error);
      setFeedback({
        tipo: 'erro',
        mensagem: 'Erro ao excluir o post. Por favor, tente novamente.'
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '');

      const postData = {
        titulo: formData.titulo,
        resumo: formData.resumo,
        conteudo: formData.conteudo,
        imagem: formData.imagem,
        categoria: formData.categoria,
        autor: formData.autor,
        tags: tagsArray
      };

      if (isEditing && formData.id) {
        // Atualizar post existente
        await updateDoc(doc(db, 'blog_posts', formData.id), {
          ...postData,
          atualizado: serverTimestamp()
        });

        // Atualizar na lista local
        setPosts(prevPosts => 
          prevPosts.map(post => 
            post.id === formData.id 
              ? { 
                  ...post, 
                  ...postData,
                  tags: tagsArray
                } 
              : post
          )
        );

        setFeedback({
          tipo: 'sucesso',
          mensagem: 'Post atualizado com sucesso!'
        });
      } else {
        // Criar novo post
        const docRef = await addDoc(collection(db, 'blog_posts'), {
          ...postData,
          dataCriacao: serverTimestamp(),
          visualizacoes: 0
        });

        // Adicionar à lista local (simulando a data de criação)
        const novoPost: BlogPost = {
          id: docRef.id,
          ...postData,
          dataCriacao: new Date(),
          tags: tagsArray
        };

        setPosts(prevPosts => [novoPost, ...prevPosts]);
        
        setFeedback({
          tipo: 'sucesso',
          mensagem: 'Post criado com sucesso!'
        });
      }

      // Resetar formulário
      resetForm();
    } catch (error) {
      console.error('Erro ao salvar post:', error);
      setFeedback({
        tipo: 'erro',
        mensagem: 'Erro ao salvar o post. Por favor, tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Administração do Blog
          </h1>
          <p className="text-lg text-gray-700">
            Crie, edite e gerencie as publicações do blog.
          </p>
        </motion.div>

        {/* Feedback */}
        {feedback && (
          <div className={`p-4 mb-6 rounded-md ${
            feedback.tipo === 'sucesso' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
            {feedback.mensagem}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Formulário */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                {isEditing ? 'Editar Post' : 'Novo Post'}
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="titulo">
                    Título*
                  </label>
                  <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    value={formData.titulo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="categoria">
                    Categoria*
                  </label>
                  <input
                    type="text"
                    id="categoria"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Logoterapia, Ansiedade, Relacionamentos"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="resumo">
                    Resumo*
                  </label>
                  <textarea
                    id="resumo"
                    name="resumo"
                    value={formData.resumo}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="conteudo">
                    Conteúdo*
                  </label>
                  <textarea
                    id="conteudo"
                    name="conteudo"
                    value={formData.conteudo}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    Você pode usar HTML básico para formatação: &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;ul&gt;, &lt;li&gt;
                  </p>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="imagem">
                    URL da Imagem
                  </label>
                  <input
                    type="url"
                    id="imagem"
                    name="imagem"
                    value={formData.imagem}
                    onChange={handleChange}
                    placeholder="https://exemplo.com/imagem.jpg"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="autor">
                    Autor
                  </label>
                  <input
                    type="text"
                    id="autor"
                    name="autor"
                    value={formData.autor}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="tags">
                    Tags (separadas por vírgula)
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="Ex: saúde mental, terapia, ansiedade"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-grow py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Salvando...' : isEditing ? 'Atualizar' : 'Publicar'}
                  </button>
                  
                  {isEditing && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md font-medium transition-colors"
                    >
                      Cancelar
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
          
          {/* Lista de Posts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                Posts Publicados
              </h2>
              
              {isLoading ? (
                <div className="flex justify-center py-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                  Nenhum post publicado ainda. Crie seu primeiro post!
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {posts.map(post => (
                    <div key={post.id} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex-grow">
                          <h3 className="text-lg font-medium text-gray-900">
                            {post.titulo}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <span>{post.categoria}</span>
                            <span className="mx-2">•</span>
                            <span>{post.dataCriacao.toLocaleDateString('pt-BR')}</span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2 mt-3 md:mt-0">
                          <button
                            onClick={() => editPost(post)}
                            className="px-3 py-1 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-md text-sm transition-colors"
                          >
                            Editar
                          </button>
                          
                          <button
                            onClick={() => deletePost(post.id)}
                            className="px-3 py-1 bg-red-100 text-red-700 hover:bg-red-200 rounded-md text-sm transition-colors"
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
      </div>
    </section>
  );
};

export default BlogAdmin; 