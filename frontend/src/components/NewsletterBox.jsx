import React from 'react'
const onSumbitHandler =(event) =>{
  event.preventDefault()
}

const NewsletterBox = () => {
  return (
    <div className='text-center md:p-5 p-3'>
      <p className='text-orange-500 text-3xl font-medium'> Subscribe now for updates</p>
      <p className='mt-3 text-gray-700'>Subscribe now to get exclusive deals, latest trends, and special offers delivered to your inbox!</p>
      <form  onSubmit={onSumbitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-orange-400 pl-3'>
        <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />
        <button type='submit' className='bg-orange-400 font-medium text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
