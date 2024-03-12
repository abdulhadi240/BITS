'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
const ImageData = ({imageUrl , large}) => {
  return (
    <div>
        <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1}} className="image">
        {large ? (
        <Image src={imageUrl} height={600} width={600} alt="image"/>

        ) : (
          <Image src={imageUrl} height={500} width={500} alt="image"/>

        )}
      </motion.div>
    </div>
  )
}

export default ImageData