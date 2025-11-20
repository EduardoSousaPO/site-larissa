import { createClient } from '@supabase/supabase-js';

// Configurações do Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://eufmjalbbvdbdmtlpywa.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1Zm1qYWxiYnZkYmRtdGxweXdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NzMxMzQsImV4cCI6MjA3OTE0OTEzNH0.Kk-96WJ2ACozPJ1EHRTSM42aJEa6-WAJzuZq3MYLjUQ';

// Verificar se as credenciais estão configuradas
if (!supabaseUrl || supabaseUrl.includes('SUA_URL') || !supabaseAnonKey || supabaseAnonKey.includes('SUA_KEY')) {
  console.warn('⚠️ ATENÇÃO: Configure as credenciais do Supabase no arquivo .env');
}

// Criar cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export default supabase;

