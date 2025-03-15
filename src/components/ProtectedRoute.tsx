import { useEffect } from '@lynx-js/react';
import { useNavigate } from 'react-router';
import { getItem } from '../utils/storage';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getItem('accessToken');
      if (!token) {
        navigate('/login'); // Redirect to login if not authenticated
      }
    };

    checkAuth();
  }, [navigate]);

  return children;
};

export default ProtectedRoute;
