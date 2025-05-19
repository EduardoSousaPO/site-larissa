import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import app from './firebase';

// Inicializa o serviço de autenticação do Firebase
const auth = getAuth(app);

// Função para realizar o login
export const login = async (email: string, password: string): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    console.error('Erro ao fazer login:', error);
    throw new Error(
      error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password'
        ? 'Email ou senha incorretos'
        : 'Erro ao fazer login. Tente novamente.'
    );
  }
};

// Função para fazer logout
export const logout = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    throw new Error('Erro ao fazer logout');
  }
};

// Hook personalizado para verificar o estado de autenticação
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Limpar a inscrição ao desmontar
    return unsubscribe;
  }, []);

  return { currentUser, loading };
};

// Função para verificar se o usuário está autenticado
export const isUserAuthenticated = (): boolean => {
  return auth.currentUser !== null;
}; 