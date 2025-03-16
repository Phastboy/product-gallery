import { getItem } from './storage.ts';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your NestJS backend URL

const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const token = await getItem('accessToken'); // Use native storage
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export default fetchWithAuth;
