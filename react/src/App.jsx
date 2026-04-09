import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Fetchapi from './components/Fetchapi'
import Oojs from './components/Oojs'
import Javascript from './components/Javascript'
import Axios from './components/Axios'
import Spa from './components/Spa'
import React2 from './components/React2'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-auto bg-base-300'>
      <Router>
        <Header headerText={"Web programozás-1 Előadás házi feladat"} />
        <Routes>
          <Route path="/eloadas" element={<Main />} />
          <Route path="/eloadas/Fetchapi" element={<Fetchapi />} />
          <Route path="/eloadas/React" element={<React2 />} />
          <Route path="/eloadas/Axios" element={<Axios />} />
          <Route path="/eloadas/Oojs" element={<Oojs />} />
          <Route path="/eloadas/Javascript" element={<Javascript />} />
          <Route path="/eloadas/Spa" element={<Spa />} />
          <Route path="*" element={<Navigate to={"/eloadas"} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
