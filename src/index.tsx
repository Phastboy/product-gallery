import { root } from '@lynx-js/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { App } from './pages/App.tsx';
import Home from './pages/Home.tsx';
import Search from './pages/Search.tsx';
import ComposePost from './pages/ComposePost.tsx';
import Profile from './pages/Profile.tsx';

root.render(
  <MemoryRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/compose-post' element={<ComposePost />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </MemoryRouter>
);
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
