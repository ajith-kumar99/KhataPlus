import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import menu_icon from '../assets/menu_icon.png'
import back_icon from '../assets/back_icon.png'

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (

    <>
      <div className="absolute top-5 z-50 md:w-[90vw] w-[95vw] left-1/2 -translate-x-1/2 h-[15vw] sm:h-[13vw] md:h-[10vw] lg:h-[4vw] bg-black/40 flex items-center justify-between px-10 rounded-full backdrop-filter backdrop-blur-md">


        <div>
          <Link to='/' className='cursor-pointer'>
          <p className='text-3xl font-bold text-white flex'>
            Khata
            <span className='text-orange-400'>Plus<sup>+</sup></span>
          </p>
          </Link>

        </div>

        <div className='hidden md:block'>
          <ul className='flex text-white items-center justify-center gap-x-4'>
            <NavLink to='/' className={({ isActive }) => isActive ? "text-orange-400 font-bold" : "text-white"}>
              Home
            </NavLink>
            <NavLink to='/products' className={({ isActive }) => isActive ? "text-orange-400 font-bold" : "text-white"} >
              Products
            </NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? "text-orange-400 font-bold" : "text-white"}>
              About Us
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? "text-orange-400 font-bold" : "text-white"}>
              Contact Us
            </NavLink>
          </ul>
        </div>

        <div className='hidden md:flex items-center justify-center gap-x-4 '>
          <p className='text-white font-bold'>Khata</p>
          <button className='px-4 py-1.5 rounded-full text-center bg-orange-400 text-white font-bold'>Sign In</button>


        </div>

        <img src={menu_icon} onClick={() => setVisible(true)} alt="menu_icon" className='md:hidden h-[30px] w-[30px]' />

      </div >

      <div className={`absolute top-0 bottom-0 right-0 h-full overflow-hidden bg-black/90 backdrop-filter backdrop-blur-sm transition-all z-50 ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col p-5 text-white gap-y-4'>
          <div className='flex items-center text-md cursor-pointer font-bold mb-5'>
            <img src={back_icon} alt="back-button" className='w-8px h-8px' onClick={() => setVisible(false)} />
            <p onClick={() => setVisible(false)}>
              Back
            </p>
          </div>
          <NavLink to='/' onClick={() => setVisible(false)} className={({ isActive }) => isActive ? "text-orange-400 font-medium text-xl py-2 px-6 border-y-2" : "text-white font-medium text-xl py-2 px-6 border-y-2"}>
            Home
          </NavLink>
          <NavLink to='/products' onClick={() => setVisible(false)} className={({ isActive }) => isActive ? "text-orange-400 font-medium text-xl py-2 px-6 border-y-2" : "text-white font-medium text-xl py-2 px-6 border-y-2"} >
            Products
          </NavLink>
          <NavLink to='/about' onClick={() => setVisible(false)} className={({ isActive }) => isActive ? "text-orange-400 font-medium text-xl py-2 px-6 border-y-2" : "text-white font-medium text-xl py-2 px-6 border-y-2"}>
            About Us
          </NavLink>
          <NavLink to='/contact' onClick={() => setVisible(false)} className={({ isActive }) => isActive ? "text-orange-400 font-medium text-xl py-2 px-6 border-y-2" : "text-white font-medium text-xl py-2 px-6 border-y-2"}>
            Contact Us
          </NavLink>

        </div>






      </div>




    </>
  )
}

export default Navbar
