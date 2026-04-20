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
  }, [location.pathname, location.search]);

  useEffect(() => {
    let timeoutId: number | undefined;

    const scrollToHash = (attempt = 0) => {
      if (!location.hash) {
        window.scrollTo({ top: 0, behavior: 'auto' });
        return;
      }

      const targetId = decodeURIComponent(location.hash.slice(1));
      const target = document.getElementById(targetId);

      if (!target) {
        if (attempt < 12) {
          timeoutId = window.setTimeout(() => scrollToHash(attempt + 1), 50);
        }
        return;
      }

      const headerHeight =
        document.querySelector('header')?.getBoundingClientRect().height ?? 88;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

      window.scrollTo({
        top: Math.max(top, 0),
        behavior: 'smooth',
      });
    };

    if (location.hash) {
      timeoutId = window.setTimeout(() => scrollToHash(), 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [location.pathname, location.search, location.hash]);

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
                  <h1 className="text-4xl font-bold text-gray-900">Página não encontrada</h1>
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
