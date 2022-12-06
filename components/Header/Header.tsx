import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className='bg-black-dark'>
      <div className='container'>
        <Image src="/Images/Header_Img/site_logo.svg" width={245} height={43} alt="site-logo" />
      </div>
    </header>
  )
}

export default Header