import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Fetchapi from './components/Fetchapi'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-auto'>
      <Router>
        <Header headerText={"Web programozás-1 Előadás házi feladat"} />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Fetchapi" element={<Fetchapi />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
