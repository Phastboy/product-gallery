import { root } from '@lynx-js/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import Home from './screens/feed/Home.tsx';
import Login from './screens/login/Login.tsx';
import Post from './screens/post/Post.tsx';
import Profile from './screens/profile/Profile.tsx';
import Splash from './screens/splash/Splash.tsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.tsx';

root.render(
  <MemoryRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='/home'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path='/post/:id'
        element={
          <ProtectedRoute>
            <Post />
          </ProtectedRoute>
        }
      />
      <Route
        path='/profile'
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  </MemoryRouter>
);
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
