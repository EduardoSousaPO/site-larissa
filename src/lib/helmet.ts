// Interop wrapper for react-helmet-async.
//
// react-helmet-async ships as CommonJS (its package.json has no `exports` map),
// so Node's ESM loader resolves the CommonJS entry during the SSG build and a
// plain `import { Helmet }` fails with "Named export not found". At the same time
// it MUST stay a single, shared module instance (external, not bundled) so that
// the <Helmet> we render uses the very same HelmetProvider context that
// vite-react-ssg sets up to extract the <head> tags — bundling it would create a
// second instance and silently drop all SEO tags.
//
// Using a namespace import plus the `.default ?? namespace` interop works in both
// worlds: under Node/CJS the namespace exposes `default` (= module.exports), and
// under the browser/ESM build the named exports live directly on the namespace.
import * as ReactHelmetAsync from 'react-helmet-async';

type ReactHelmetAsyncModule = typeof import('react-helmet-async');

const helmetModule = ((ReactHelmetAsync as unknown as { default?: ReactHelmetAsyncModule })
  .default ?? ReactHelmetAsync) as ReactHelmetAsyncModule;

export const Helmet = helmetModule.Helmet;
export const HelmetProvider = helmetModule.HelmetProvider;
