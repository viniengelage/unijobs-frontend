import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  refreshToken: string;
  user: object;
}

interface SignInCredentails {
  email: string;
  password: string;
}

interface AuthContextData {
  token: string;
  refreshToken: string;
  user: object;
  signIn(credentails: SignInCredentails): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@UniJobs:token');
    const user = localStorage.getItem('@UniJobs:user');
    const refreshToken = localStorage.getItem('@UniJobs:refreshToken');
    api.defaults.headers.authorization = `Bearer ${token}`;

    if (token && user && refreshToken) {
      return { token, refreshToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, refreshToken } = response.data.token;
    const { user } = response.data;

    localStorage.setItem('@UniJobs:token', token);
    localStorage.setItem('@UniJobs:refreshToken', refreshToken);
    localStorage.setItem('@UniJobs:user', JSON.stringify(user));

    setData({ token, user, refreshToken });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@UniJobs:token');
    localStorage.removeItem('@UniJobs:user');
    localStorage.removeItem('@UniJobs:refreshToken');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        refreshToken: data.refreshToken,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
