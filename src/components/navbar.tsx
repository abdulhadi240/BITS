import Image from 'next/image'
import React from 'react'

const Navbar = ({navItems}) => {
  return (
    <div className='z-99999'>
      <div className="logo">
        <Image src={'/logo1.png'} width={200} height={200} alt='logo'/>
      </div>
      <div className="navItems"></div>\
      <div className="button"></div>
    </div>
  )
}

export default Navbar