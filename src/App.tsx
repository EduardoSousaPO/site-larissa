import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Agendamento from './pages/Agendamento';
import BlogPage from './pages/BlogPage';
import PostDetail from './pages/PostDetail';
import BlogAdmin from './pages/BlogAdmin';
import Login from './pages/Login';
import { useAuth } from './services/auth';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Componente para rotas protegidas
const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
    </div>;
  }

  if (!currentUser) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="agendamento" element={<Agendamento />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:postId" element={<PostDetail />} />
            <Route path="*" element={<div className="container py-20 text-center"><h1 className="text-4xl">Página não encontrada</h1></div>} />
          </Route>
          
          {/* Rotas administrativas */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/blog" element={
            <ProtectedRoute>
              <BlogAdmin />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
