'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Sections = ({title , src}) => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }}
    whileInView={{opacity: 1, y: 0}}
    transition={{ duration: 1.5, ease: 'easeOut' }} 
     className='w-auto  h-40 relative shadow-xl border-black rounded-lg flex flex-col justify-center items-center gap-1 hover:cursor-pointer hover:shadow-2xl hover:transition-all'>
    <div className='flex justify-center items-center'>
        <Image src={src} height={50} width={50} alt='icon'/>
    </div>

    <div className="title w-40 flex justify-center text-center items-center font-semibold tracking-wider mt-3 ">
        {title}
    </div>
    <div className='h-1 mt-3 w-20 rounded-lg flex justify-center bg-[#243dd3]'/>
</motion.div>


  )
}

export default Sections