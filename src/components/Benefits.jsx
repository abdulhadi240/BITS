import React from 'react'
import Cards from './Cards'
const Benefits = () => {
  return (
    <div className='flex flex-col gap-44'>
      <div className=''>
      <div className="flex  justify-center text-sm mb-4 tagline text-[#223ED4]">
        Powerful Features
      </div>
      <div className="flex justify-center ml-10 leading-tight tracking-wider title">
        <h1 className='text-[60px] w-[630px] font-semibold'>Our Products Has These Big  <span className=' text-[60px] px-6 pb-2 items-center text-white rounded-full bg-[#223ED4]'> Features</span>  </h1> 
      </div>
      </div>
    <div className='flex justify-center gap-20'>
        <Cards icon={'/database.png'} image={'/Group 1.png'} title={'Real-Time Insights'} des={'Gain In-Depth Visibility into Your Business Performance'}/>
        <Cards icon={'/database.png'} image={'/Group 2.png'} title={'Integrated CRM'} des={'Build Stronger Customer Relationships with Seamless CRM Integration'}/>
        <Cards icon={'/database.png'} image={'/Group 5.png'} title={'User-Friendly Interface'} des={'Gain a competitive edge with our SEO optimization tools , ensuring your website ranks'}/>

    </div>
    </div>
  )
}

export default Benefits