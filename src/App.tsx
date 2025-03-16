import { useNavigate } from 'react-router';
import './App.css';

export default function App() {
  const navigate = useNavigate();

  return (
    <view className='App'>
      <text className='Title'>Mini Social</text>
      <text className='Subtitle'>Connect with the world</text>
      <text className='LoginButton' bindtap={() => navigate('/login')}>
        Login
      </text>
    </view>
  );
}

