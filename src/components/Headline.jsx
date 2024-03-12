'use client'
import React from 'react'
import { motion } from "framer-motion";
const Headline = () => {
  return (
    <div>
        <motion.div
      initial={{ opacity: 0 , y: 30 }}
      animate={{ opacity: 1 , y: 0}}
      transition={{ duration: 2 }}
       className="absolute z-10 w-full top-[450px] flex flex-col items-center justify-center gap-12">
        <h1 className="max-w-3xl font-bold text-center text-white text-7xl">
          Unlock your business potential
        </h1>
        <p className="max-w-2xl text-center text-white">
        Transform Your Business Landscape with BITS: A Comprehensive Suite of Innovations in ERP Systems, Web Development, Generative AI, App Development, and Expert Support, Pioneering Data-Driven Decision-Making and Empowering Your Journey Towards Success.
        </p>
        <div className="email rounded-lg w-[400px] h-16 flex  gap-6 px-3 border-[1px] border-slate-500 bg-transparent">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Business Email"
            className="items-center h-10 my-2 text-white bg-transparent border-none w-80 active:bg-transparent placeholder:text-base placeholder:text-white"
          />
          <button className="w-48 h-12 mt-[6px]  bg-[#243dd3] text-semibold rounded-lg hover:bg-white hover:text-[#243dd3] hover:shadow-[#243dd3] hover:shadow-inner  text-white">Talk to Sales</button>
        </div>
      </motion.div>
    </div>
  )
}

export default Headline