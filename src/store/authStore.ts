import { useState } from '@lynx-js/react';
import fetchWithAuth from '../utils/api';
import { setItem, getItem, removeItem } from '../utils/storage';

const useAuthStore = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetchWithAuth('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      await setItem('accessToken', response.accessToken); // Use native storage
      setUser(response.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = async () => {
    await removeItem('accessToken'); // Use native storage
    setUser(null);
    setIsAuthenticated(false);
  };

  // Check if the user is already authenticated on app load
  const checkAuth = async () => {
    const token = await getItem('accessToken'); // Use native storage
    if (token) {
      setIsAuthenticated(true);
    }
  };

  return { user, isAuthenticated, login, logout, checkAuth };
};

export default useAuthStore;
