import React from 'react'
import bgImage from '../assets/ecommerce_bg.jpg'

const Hero = () => {
  return (
    <div 
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to KhataPlus</h1>
        <p className="mt-4 text-lg md:text-xl">Your universal business ledger platform</p>
        <button className="mt-8 px-6 py-3 bg-orange-400 hover:bg-orange-500 rounded-full text-white font-medium">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
