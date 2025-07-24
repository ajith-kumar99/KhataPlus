import React from 'react'
import star_icon from '../assets/star_icon.png'

const Title = ({text1,text2}) => {
  return (
    <div className='flex justify-center items-center text-3xl lg:text-4xl font-medium text-black p-5 pb-0 m-2 gap-x-2'>
        <img src={star_icon} alt="star" className='w-8 text-center pt-1 lg:w-10' />
      <span>{text1}</span>
      <span className='text-orange-500'>{text2}</span>
      <img src={star_icon} alt="star" className='w-8 text-center pt-1 lg:w-10' />
    </div>
  )
}

export default Title
