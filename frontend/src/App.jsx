import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Ledger from './pages/Ledger'
import Navbar from './components/Navbar'




const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Products' element={<Products/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Ledger' element={<Ledger/>} />
      </Routes>
      
    </div>
  )
}

export default App
