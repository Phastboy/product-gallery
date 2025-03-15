import { root } from '@lynx-js/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import Home from './screens/Home.tsx';
import Login from './screens/Login.tsx';
import Posts from './screens/Posts.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';

root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/posts"
        element={
          <ProtectedRoute>
            <Posts />
          </ProtectedRoute>
        }
      />
    </Routes>
  </MemoryRouter>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
