import { useNavigate, useLocation } from 'react-router';
import './Nav.css';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <view className='Nav'>
      <view
        className={`NavItem ${isActive('/home') ? 'active' : ''}`}
        bindtap={() => navigate('/home')}
      >
        <text className='NavIcon'>🏠</text>
        <text className='NavLabel'>Home</text>
      </view>
      <view
        className={`NavItem ${isActive('/search') ? 'active' : ''}`}
        bindtap={() => navigate('/search')}
      >
        <text className='NavIcon'>🔍</text>
        <text className='NavLabel'>Search</text>
      </view>
      <view
        className={`NavItem ${isActive('/compose-post') ? 'active' : ''}`}
        bindtap={() => navigate('/compose-post')}
      >
        <text className='NavIcon'>📜</text>
        <text className='NavLabel'>Post</text>
      </view>
      <view
        className={`NavItem ${isActive('/profile') ? 'active' : ''}`}
        bindtap={() => navigate('/profile')}
      >
        <text className='NavIcon'>👤</text>
        <text className='NavLabel'>Profile</text>
      </view>
    </view>
  );
};

export default Nav;
