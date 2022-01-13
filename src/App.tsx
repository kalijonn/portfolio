import React from 'react'
import {AnimatePresence} from 'framer-motion'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import Landing from './Pages/Landing'
import Work from './Pages/Work'
import Navigation from './Components/Navigation'
import Contact from './Pages/Contact'

export default function App() {
  return (
    <div className="bg-black h-screen w-screen text-white">
      <div className="md:w-3/5 w-11/12 mx-auto">
        <BrowserRouter>
          <Navigation />
          <Main />
        </BrowserRouter>
      </div>
    </div>
  )
}

const Main = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="work" element={<Work />} />
      </Routes>
    </AnimatePresence>
  )
}
