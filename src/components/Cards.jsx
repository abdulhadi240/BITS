import Image from 'next/image'
import React from 'react'

const Cards = ({image , icon , title , des}) => {
  return (
    <div className=''>
        <div className="w-auto p-2 bg-white shadow-inner rounded-xl">
            <Image className='border-[1px] border-[#c7c7c736] img rounded-xl' src={image} alt='image' width={340} height={340}/>
        </div>
        <div className="flex flex-col gap-3 mt-4 text-black data w-80">
            <div className="flex gap-4 px-4 mt-3 line1">
            <div className=" icon">
                <Image src={icon} width={25} height={25} alt='image'/>
            </div>
            <div className="text-xl font-semibold tit">
                {title}
            </div>
            </div>
            <div className="px-3 text-sm des">
                {des}
            </div>
        </div>
    </div>
  )
}

export default Cards