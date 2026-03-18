import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Employees from './pages/Employees'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  )
}
