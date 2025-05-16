import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY", // Substitua com sua chave real
  authDomain: "site-larissa-nunes.firebaseapp.com",
  projectId: "site-larissa-nunes",
  storageBucket: "site-larissa-nunes.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar o Firestore
export const db = getFirestore(app);

export default app; 