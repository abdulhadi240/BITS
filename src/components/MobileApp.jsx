import Image from 'next/image'
import React from 'react'
import Sections from './Sections'

const MobileApp = () => {
  return (
    <div className='flex gap-64 px-40 mt-64'>
          <div className="section1 flex gap-10">
              <div className='flex flex-col gap-10'>
                  <Sections src={'/report1.png'} title={'Sales Force Reporting'} />
                  <Sections src={'/point.png'} title={'Sales Invoice'} />
                  <Sections src={'/track.png'} title={'Location Tracking'} />
              </div>
              <div className='mt-20 flex flex-col gap-10'>
                  <Sections src={'/online.png'} title={'Order Booking'} />
                  <Sections src={'/slip.png'} title={'Recovery Slip'} />
              </div>
          </div>
          <div className="image">
              <Image src={'/mobile.png'} width={350} height={350} alt="mobile" />
          </div>
        <div className="section2 flex gap-10">
               <div className='flex flex-col gap-10'>
                  <Sections src={'/warehouse.png'} title={'Stock Positioning'} />
                  <Sections src={'/reg.png'} title={'On Feild Customer Registration'} />
                  <Sections src={'/attendance.png'} title={'Feild Attendence '} />
               </div>
              <div className='mt-20 flex flex-col gap-10'>
                  <Sections src={'/product.png'} title={'On Feild Product Surveys'} />
              </div>
        </div>
    </div>
        
        
       
    
  )
}

export default MobileApp