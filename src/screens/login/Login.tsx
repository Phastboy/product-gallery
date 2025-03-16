import './Login.css';
import { useState } from '@lynx-js/react';
import { useNavigate } from 'react-router';
import useAuthStore from '../../store/authStore.ts';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { login } = useAuthStore();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate('/home'); // Redirect to home page after successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <view className="LoginContainer">
      <view className="LoginForm">
        <text className="LoginTitle">Login</text>

        <text className="LoginLabel" >Email</text>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Update email state on input change
          className="LoginInput"
        />

        <text className="LoginLabel">Password</text>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on input change
          className="LoginInput"
        />

        <text className="LoginButton" bindtap={handleLogin}>
          Login
        </text>

        <text className="SignupPrompt">
          Don't have an account?{' '}
          <text
            className="SignupLink"
            bindtap={() => navigate('/signup')}  // Navigate to signup page
          >
            Sign up
          </text>
        </text>
      </view>
    </view>
  );
};

export default Login;

