import { useState } from '@lynx-js/react';
import { useNavigate } from 'react-router';
import useAuthStore from '../store/authStore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleLogin = async () => {
    await login(email, password);
    navigate('/home'); // Redirect to home after login
  };

  return (
    <view className="Login">
      <text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Login</text>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button bindtap={handleLogin}>Login</button>
    </view>
  );
};

export default Login;
