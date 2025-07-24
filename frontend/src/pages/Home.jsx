import React from 'react'
import Hero from '../components/Hero'
import LatestProducts from '../components/LatestProducts'
import BestSeller from '../components/BestSeller'
import NewsletterBox from '../components/NewsletterBox'
import Footer from '../components/Footer'




const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <LatestProducts/>
      <BestSeller/>
      <NewsletterBox/>
      <Footer/>
    </div>
  )
}

export default Home
