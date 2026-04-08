import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Agendamento from './pages/Agendamento';
import BlogPage from './pages/BlogPage';
import PostDetail from './pages/PostDetail';
import BlogAdmin from './pages/BlogAdmin';
import Login from './pages/Login';
import Register from './pages/Register';
import PrimeiraConsultaPage from './pages/PrimeiraConsultaPage';
import SessaoResolucaoPage from './pages/SessaoResolucaoPage';
import { useAuth } from './services/auth';
import { initGA, trackPageView } from './services/analytics';

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-primary-600" />
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

const RouteAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    const path = `${location.pathname}${location.search}`;
    trackPageView(path);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.search]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <RouteAnalytics />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="agendamento" element={<Agendamento />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<PostDetail />} />

            <Route
              path="*"
              element={
                <div className="container py-20 text-center">
                  <h1 className="text-4xl font-bold text-gray-900">Pagina nao encontrada</h1>
                </div>
              }
            />
          </Route>

          <Route path="/primeira-consulta" element={<PrimeiraConsultaPage />} />
          <Route path="/sessao-de-resolucao" element={<SessaoResolucaoPage />} />

          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />
          <Route
            path="/admin/criar-artigos"
            element={
              <ProtectedRoute>
                <Navigate to="/admin/blog" replace />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blog"
            element={
              <ProtectedRoute>
                <BlogAdmin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
