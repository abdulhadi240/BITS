import React from 'react'
import Cards from './Cards'
const Benefits = () => {
  return (
    <div className='flex flex-col gap-44'>
      <div className=''>
      <div className="flex  justify-center text-sm mb-4 tagline text-[#223ED4]">
        Powerful Features
      </div>
      <div className="flex justify-center leading-tight tracking-wide title">
        <h1 className='text-[64px] w-[630px] font-semibold'>Our Product Has These Big  <span className=' text-[64px] px-6 pb-2 items-center text-white rounded-full bg-[#223ED4]'> Features</span>  </h1> 
      </div>
      </div>
    <div className='flex justify-center gap-10'>
        <Cards icon={'/database.png'} image={'/p.png'} title={'Beautiful Design'} des={'Gain a competitive edge with our SEO optimization tools , ensuring your website ranks'}/>
        <Cards icon={'/database.png'} image={'/d.png'} title={'Beautiful Design'} des={'Gain a competitive edge with our SEO optimization tools , ensuring your website ranks'}/>
        <Cards icon={'/database.png'} image={'/dash.png'} title={'Beautiful Design'} des={'Gain a competitive edge with our SEO optimization tools , ensuring your website ranks'}/>

    </div>
    </div>
  )
}

export default Benefits