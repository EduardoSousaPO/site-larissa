import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Agendamento from './pages/Agendamento';
import BlogPage from './pages/BlogPage';
import PostDetail from './pages/PostDetail';
import BlogAdmin from './pages/BlogAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="agendamento" element={<Agendamento />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:postId" element={<PostDetail />} />
          <Route path="admin/blog" element={<BlogAdmin />} />
          <Route path="*" element={<div className="container py-20 text-center"><h1 className="text-4xl">Página não encontrada</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
