import { useCallback, useEffect, useState } from '@lynx-js/react';
import './App.css';
import lynxLogo from './assets/lynx-logo.png';
import { useNavigate } from 'react-router';

export default function App() {
  const [alterLogo, setAlterLogo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.info('Welcome to Mini Social!');
  }, []);

  const onTap = useCallback(() => {
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  return (
    <view>
      <view className='Background' />
      <view className='App'>
        <view className='Banner'>
          <view className='Logo' bindtap={onTap}>
            <image src={lynxLogo} className={alterLogo ? 'Logo--spin' : 'Logo--static'} />
          </view>
          <text className='Title'>Mini Social</text>
          <text className='Subtitle'>Connect with the world</text>
        </view>
        <view className='LoginButtonContainer'>
          <text className='LoginButton' bindtap={() => navigate('/login')}>
            Login
          </text>
        </view>
        <view className='Content'>
          <text className='Description'>Tap the logo to see magic!</text>
          <text className='Hint'>
            Edit<text style={{ fontStyle: 'italic' }}>{' src/App.tsx '}</text>
            to customize this app.
          </text>
        </view>
        <view style={{ flex: 1 }}></view>
      </view>
    </view>
  );
}
