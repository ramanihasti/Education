import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import About from './pages/About'
import Service from './pages/Service'
import Education from './pages/Education'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Gellery from './pages/Gellery'

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                     <Route index element={<Home />}/>
                     <Route path="about" element={<About />}/>
                     <Route path="service" element={<Service />}/>
                     <Route path="gellery" element={<Gellery />}/>
                     <Route path="education" element={<Education />}/>
                     <Route path="contact" element={<Contact />}/>
                     <Route path="*" element={<NotFound />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
)
}

export default App