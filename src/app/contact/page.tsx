import { Meteors } from '@/components/ui/meteors'
import React from 'react'
Meteors
function page() {
  return (
    <div className=' bg-black py-12 pt-36 '>
      <h1 className='text-lg md:text-6xl text-center font-sans font-bold mb-8 text-white'>Contact Us</h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, repellendus.
        </p>
      <div className='flex flex-col items-center '>
        <input type="text" placeholder='Your Email Address'/>
        <textarea placeholder='Your Message'></textarea>
        <button>Send Message</button>
      </div>
    </div>
  )
}

export default page
