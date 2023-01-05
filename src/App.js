import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import './index.css'

function App() {
 
  return (
    <div className="App bg-cyan-700">
      <br />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </div>
  )
}

export default App
