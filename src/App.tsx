import React, { useEffect } from 'react';
import {
  Navigate,
  Outlet,
  useLocation,
  type LoaderFunctionArgs,
} from 'react-router-dom';
import type { RouteRecord } from 'vite-react-ssg';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Agendamento from './pages/Agendamento';
import BlogPage from './pages/BlogPage';
import PostDetail from './pages/PostDetail';
import BlogAdmin from './pages/BlogAdmin';
import Login from './pages/Login';
import Register from './pages/Register';
import PrimeiraConsultaPage from './pages/PrimeiraConsultaPage';
import PrivacidadePage from './pages/PrivacidadePage';
import SessaoResolucaoPage from './pages/SessaoResolucaoPage';
import ContatoPage from './pages/ContatoPage';
import SobrePage from './pages/SobrePage';
import AnsiedadePage from './pages/landing/AnsiedadePage';
import AutoestimaPage from './pages/landing/AutoestimaPage';
import CriseExistencialPage from './pages/landing/CriseExistencialPage';
import DoencasCronicasPage from './pages/landing/DoencasCronicasPage';
import { useAuth } from './services/auth';
import {
  getPublishedBlogPostBySlug,
  getPublishedBlogPosts,
  getRelatedBlogPosts,
} from './services/blogPosts';
import {
  initGA,
  initGoogleAds,
  initMetaPixel,
  trackMetaPageView,
  trackPageView,
} from './services/analytics';

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
    initGoogleAds();
    initMetaPixel();
  }, []);

  useEffect(() => {
    const path = `${location.pathname}${location.search}`;
    trackPageView(path);
    trackMetaPageView();
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

const RootLayout = () => (
  <>
    <RouteAnalytics />
    <Outlet />
  </>
);

const NotFound = () => (
  <div className="container py-20 text-center">
    <h1 className="text-4xl font-bold text-gray-900">Página não encontrada</h1>
  </div>
);

// --- Build-time data (SSG) ---------------------------------------------------
// These loaders run server-side during the SSG build (via React Router's static
// handler) so the blog content is baked into the HTML. On the client, vite-react-ssg
// serves the serialized loader data, and the page components also re-fetch live
// data after hydration to keep content fresh for real visitors.

export async function blogListLoader() {
  try {
    return { posts: await getPublishedBlogPosts() };
  } catch (error) {
    console.warn('[ssg] blogListLoader failed, rendering empty list', error);
    return { posts: [] };
  }
}

export async function postLoader({ params }: LoaderFunctionArgs) {
  const slug = params.slug;

  if (!slug) {
    return { post: null, related: [] };
  }

  try {
    const post = await getPublishedBlogPostBySlug(slug);
    const related = post ? await getRelatedBlogPosts(post.category, post.id) : [];
    return { post, related };
  } catch (error) {
    console.warn(`[ssg] postLoader failed for slug "${slug}"`, error);
    return { post: null, related: [] };
  }
}

export async function blogStaticPaths() {
  try {
    const posts = await getPublishedBlogPosts();
    return posts.map((post) => `/blog/${post.slug}`);
  } catch (error) {
    console.warn('[ssg] blogStaticPaths failed, no article pages will be pre-rendered', error);
    return [];
  }
}

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'agendamento', element: <Agendamento /> },
          { path: 'privacidade', element: <PrivacidadePage /> },
          { path: 'sobre', element: <SobrePage /> },
          { path: 'contato', element: <ContatoPage /> },
          // Landing pages de Google Ads. Ficam dentro do MainLayout de
          // propósito: a Navbar e o Footer entregam a navegabilidade e a
          // identificação do anunciante que a política de destino exige, e o
          // Footer é onde vivem o CRP e o link da política de privacidade.
          // Diferente de /primeira-consulta e /sessao-de-resolucao, estas são
          // indexáveis — precisam ranquear organicamente, não só receber tráfego pago.
          { path: 'psicologa-online-para-ansiedade', element: <AnsiedadePage /> },
          { path: 'psicologa-online-para-autoestima', element: <AutoestimaPage /> },
          {
            path: 'psicologa-online-para-crise-existencial',
            element: <CriseExistencialPage />,
          },
          { path: 'psicologa-para-doencas-cronicas', element: <DoencasCronicasPage /> },
          {
            path: 'blog',
            element: <BlogPage />,
            loader: blogListLoader,
            entry: 'src/pages/BlogPage.tsx',
          },
          {
            path: 'blog/:slug',
            element: <PostDetail />,
            loader: postLoader,
            getStaticPaths: blogStaticPaths,
            entry: 'src/pages/PostDetail.tsx',
          },
        ],
      },
      { path: 'primeira-consulta', element: <PrimeiraConsultaPage /> },
      { path: 'sessao-de-resolucao', element: <SessaoResolucaoPage /> },
      { path: 'admin/login', element: <Login /> },
      { path: 'admin/register', element: <Register /> },
      {
        path: 'admin/criar-artigos',
        element: (
          <ProtectedRoute>
            <Navigate to="/admin/blog" replace />
          </ProtectedRoute>
        ),
      },
      {
        path: 'admin/blog',
        element: (
          <ProtectedRoute>
            <BlogAdmin />
          </ProtectedRoute>
        ),
      },
      { path: '*', element: <NotFound /> },
    ],
  },
];
