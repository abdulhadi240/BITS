import Image from 'next/image'
import React from 'react'

const ProductCard = ({imgUrl , title ,description}) => {
  return (
    <div className='container'>
    <div className='flex flex-col gap-4 bg-white shadow-md w-[170px] h-[140px] card front-face rounded-md'>
        <div className='flex justify-center pt-6'>
        <Image src={imgUrl} height={50} width={50} alt='ProductImage'/>
        </div>
        <div className='flex justify-center font-semibold tracking-wider text-center'>
            {title}
        </div>
    </div>
    <div className="card back-face border-[1px]">
          <h5 className='w-full p-5 text-xs font-thin'>
            {description}
          </h5>
        </div>
    </div>
  )
}

export default ProductCard