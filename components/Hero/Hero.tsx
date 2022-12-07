import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className='hero_bg pt-160 pb-80'>
      <div className='container flex items-center justify-between py-24 h-56'>
        <div className='max-w-hero_Form_W w-full bg-black-hero_Form_Bg backdrop-blur-[15px] rounded-10 p-25'>
          <h2 className='font-semibold text-3xl text-white mb-2'>Shipping Cost Calculator</h2>
          <p className='font-normal text-base text-white'>Get your estimate quote in seconds</p>
          <span className='w-full h-[1px] inline-block bg-black-line_bg'></span>
          <form className='flex flex-col' autoComplete='off'>
            <label>
              <input type="text" />
            </label>
            <label>
              <input type="text" />
            </label>
            <label>
              <input type="text" />
            </label>
            <label>
              <input type="text" />
            </label>
          </form>
        </div>
        <div className='w-2/5'>
          <blockquote className='flex items-center font-medium text-sm text-white uppercase'><Image className='mr-10' src={"/Images/Hero_Img/star.svg"} width={24} height={24} alt="star" /> World Top Rated Shipping Company</blockquote>
          <h1 className='font-bold text-56 text-white leading-68'>Transportation Services that you can trust</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero