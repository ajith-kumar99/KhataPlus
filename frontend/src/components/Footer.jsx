import React from 'react'
import footer_image from '../assets/footer_image.jpg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='relative h-[800px] sm:h-[500px] md:[400px] lg:h-[300px] w-full bg-center bg-cover mt-5 overflow-y-hidden' style={{ backgroundImage: `url(${footer_image})` }}>
            <div className='absolute inset-0 bg-black/75 p-10'>
                <div className='grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] sm:place-items-center gap-10 h-[90%]'>
                    <div className='flex flex-col gap-5'>
                        <Link to='/' className='cursor-pointer'>
                            <p className='text-3xl font-bold text-white flex'>
                                Khata
                                <span className='text-orange-400'>Plus<sup>+</sup></span>
                            </p>
                        </Link>
                        <p className='text-white'>Khataplus is your ultimate destination for smart, reliable, and modern business solutions.We offer intuitive tools for managing your accounts, tracking expenses, and streamlining daily operations — all designed to help you stay ahead in your business journey.</p>
                    </div>

                    <div className='flex flex-col gap-y-5 text-white'>
                        <p className='font-medium text-base'>COMPANY</p>
                        <ul className='text-md '>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                        </ul>

                    </div>

                    <div className='flex flex-col gap-y-5 text-white '>
                        <p className='font-medium text-base'>GET IN TOUCH</p>
                        <ul className='text-md '>
                            <li>+01-000-000</li>
                            <li>akdevstudio@gmail.com</li>
                            <li>Youtube</li>
                            <li>Instagram</li>

                        </ul>

                    </div>

                </div>
                <div className='text-white'>
                    <hr className='bg-white border-none h-[1px]' />
                    <p className='text-center text-base py-5'>Copyright &copy; {new Date().getFullYear()} AK-DevStudios | All rights reserved</p>
                </div>
            </div>

        </div>
    )
}

export default Footer