import React from 'react'
import CustomCard from './CustomCard'
const Complex = () => {
  return (
    <div className='flex flex-col gap-64 mb-64'>
        <CustomCard index={'1'} title={'Real-Time KPI Tracking'} description={"Monitor your key performance indicators in real time. Stay up-to-date with the latest data, ensuring you're always in control and ready to adapt to changing circumstances."} imageUrl={'/user.png'}/>
        <CustomCard index={'2'} reversed title={'Customizable Dashboards'} description={"Our customizable dashboards offer real-time monitoring capabilities tailored to your ERP system and web generative AI service. Stay agile and informed with instant access to the latest data and insights. Effortlessly track essential metrics, make informed decisions, and seize opportunities as they arise"} imageUrl={'/dashb.png'}/>
        <CustomCard index={'3'} large title={'Comprehensive Analytics'} description={"Elevate your analytics game with our compact dashboard solution. Integrated seamlessly with your ERP system and web generative AI service, it offers a concise yet comprehensive view of your data universe."} imageUrl={'/anal.png'}/>
        <CustomCard index={'4'} reversed title={'Brilliant Assistant'} description={"BA is a universal robotic software, it is able to send information to relevant /concerned persons, it works as per your define parameters which are feed one time on it,BA now able to protect your digital data (such as those in Microsoft SQL Server Databases) from destructive forces, unauthorized users / thief & also makes your staff proactive"} imageUrl={'/ba.png'}/>

    </div>
  )
}

export default Complex