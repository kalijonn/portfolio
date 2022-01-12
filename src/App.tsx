import React from 'react'
import Navigation from './Components/Navigation'
import Contact from './Pages/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing'
import Work from './Pages/Work'

export default function App() {
  return (
    <div className="bg-black h-screen w-screen text-white">
      <div className="w-3/5 mx-auto">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="work" element={<Work />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}
