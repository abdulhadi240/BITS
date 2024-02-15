import React from 'react'
import Stars from './Stars'

const Card = ({des , name , sub}) => {
  return (
    <div className='border-[1px] border-[#b3b3b3] relative rounded-xl h-[360px] w-[350px] group'>
        <div className="mx-10 my-8 stars">
        <Stars/>
        </div>
        <div className="px-10 py-6 text-start review">
            <p className='text-[14px] text-black'>{des}</p>
        </div>
        <div className="mt-6 profile">
            <div className="flex flex-col px-12">
                <h1 className='text-[18px] text-black  font-semibold'>{name}</h1>
                <p className='text-xs text-black'>{sub}</p>
            </div>
        </div>
        <div className='absolute bg-transparent rounded-full top-10 w-36 h-36 blur-3xl left-20 '/>
    </div>
    
  )
}

export default Card