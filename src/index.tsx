import { root } from '@lynx-js/react'

import { App } from './App.tsx'
import { MemoryRouter, Route, Routes } from 'react-router'
import Home from './screens/Home.tsx'

root.render(
  <MemoryRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  </MemoryRouter>
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
