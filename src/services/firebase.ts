import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configurações do Firebase
// Use variáveis de ambiente ou configure diretamente aqui
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "SUA_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "site-larissa-nunes.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "site-larissa-nunes",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "site-larissa-nunes.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789012:web:abcdef1234567890abcdef"
};

// Verificar se as credenciais estão configuradas
if (firebaseConfig.apiKey === "SUA_API_KEY") {
  console.error('⚠️ ATENÇÃO: Configure as credenciais do Firebase!');
  console.error('Crie um arquivo .env na raiz do projeto com suas credenciais do Firebase.');
}

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar o Firestore
export const db = getFirestore(app);

export default app; 