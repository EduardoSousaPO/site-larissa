/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_LLM_PROVIDER?: 'claude' | 'openai' | 'groq';
  readonly VITE_LLM_API_KEY?: string;
  readonly VITE_LLM_MODEL?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_WHATSAPP_DEFAULT_MESSAGE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
