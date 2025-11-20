import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import type { User, Session } from '@supabase/supabase-js';

// Função para criar uma nova conta
export const register = async (email: string, password: string): Promise<void> => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      let errorMessage = 'Erro ao criar conta. Tente novamente.';
      
      if (error.message.includes('already registered') || error.message.includes('already exists')) {
        errorMessage = 'Este email já está em uso. Tente fazer login.';
      } else if (error.message.includes('Password')) {
        errorMessage = 'A senha deve ter pelo menos 6 caracteres.';
      } else if (error.message.includes('email')) {
        errorMessage = 'Email inválido.';
      } else {
        errorMessage = error.message;
      }
      
      throw new Error(errorMessage);
    }

    // Se não houver erro, a conta foi criada com sucesso
    if (!data.user) {
      throw new Error('Erro ao criar conta. Tente novamente.');
    }
  } catch (error: any) {
    console.error('Erro ao criar conta:', error);
    throw error;
  }
};

// Função para realizar o login
export const login = async (email: string, password: string): Promise<void> => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      let errorMessage = 'Email ou senha incorretos';
      
      if (error.message.includes('Invalid login credentials')) {
        errorMessage = 'Email ou senha incorretos';
      } else if (error.message.includes('Email not confirmed')) {
        errorMessage = 'Por favor, verifique seu email antes de fazer login.';
      } else {
        errorMessage = error.message;
      }
      
      throw new Error(errorMessage);
    }
  } catch (error: any) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

// Função para fazer logout
export const logout = async (): Promise<void> => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    throw new Error('Erro ao fazer logout');
  }
};

// Hook personalizado para verificar o estado de autenticação
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obter sessão inicial
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setCurrentUser(session?.user ?? null);
      setLoading(false);
    });

    // Escutar mudanças na autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setCurrentUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { currentUser, session, loading };
};

// Função para verificar se o usuário está autenticado
export const isUserAuthenticated = (): boolean => {
  const session = supabase.auth.getSession();
  return session !== null;
};
