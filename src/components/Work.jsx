'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const data = [
    {
        id: 1,
        number:'01',
        title: 'Dynamic ERP Systems',
        imgUrl: '/dashboard.jpg'
    },
    {
        id: 2,
        number:'02',
        title: 'Web Development',
        imgUrl: '/web.jpg'
    },
    {
        id: 3,
        number:'03',
        title: 'Generative AI Solutions',
        imgUrl: '/dashboard.jpg'
    },
    {
        id: 4,
        number:'04',
        title: 'App Development',
        imgUrl: '/dashboard.jpg'
    }
];

const Work = () => {
    const [selectedID, setSelectedID] = useState(1);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const item = data.find(item => item.id === selectedID);
        setSelectedItem(item);
    }, [selectedID]);

    const handleClick = (id) => {
        setSelectedID(id);
    };

    return (

        <div>
            <div className='mt-64 mb-20'>
                <h1 className='text-[46px] flex justify-center font-bold tracking-tight mb-6'>Unlock the BITS Advantage </h1>
                <p className='text-[15px] flex justify-center text-center'>When it comes to comprehensive business solutions, BITS stands out as the premier choice. <br/> Here's why we are the superior solution for your business:</p>
            </div>
        <div className='flex flex-col gap-10'>
            <div className='flex justify-center gap-16 '>
                {data.map((item) => (
                    <div key={item.id} onClick={() => handleClick(item.id)} className=' hover:cursor-pointer group group-hover:blur-md'>
                        <div className='flex gap-2 text-center'>
                        <h1 className='text-[#243DD3] font-light text-2xl'>{item.number}.</h1>
                        <h1 className='text-2xl font-base '>{item.title}</h1>
                        </div>
                        <div className='w-auto ml-2 px-3 mt-2 border-[1px]  border-transparent z-99999 group-hover:border-[#243DD3] group-hover:transition-all group-hover:delay-150'/>
                    </div>
                ))}
            </div>

            <div>
                {selectedItem && (
                    <motion.div
                        key={selectedItem.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='flex justify-center'
                    >
                        <Image src={selectedItem.imgUrl} width={1000} height={1000} alt={selectedItem.title} className='flex justify-center' />
                    </motion.div>
                )}
            </div>
        </div>
        </div>
    );
};

export default Work;
