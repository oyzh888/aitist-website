/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Employees from './pages/Employees'
import About from './pages/About'
import Careers from './pages/Careers'
import Legal from './pages/Legal'

import Navbar from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </BrowserRouter>
  )
}
