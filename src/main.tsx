import './index.css';
import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App';

// vite-react-ssg provides the Router (StaticRouterProvider on the build / SSG side
// and createBrowserRouter on the client) and the HelmetProvider used by SEOHead,
// so we only need to hand it the routes array exported from App.tsx.
export const createRoot = ViteReactSSG({ routes });
