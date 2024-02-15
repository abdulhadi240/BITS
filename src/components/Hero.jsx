"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen bg-no-repeat bg-cover hero">
      <div className="relative image">
        <img src={"/image 2.png"} alt="hero" fetchPriority="true" />
      </div>
      <div className="absolute z-10 w-full top-[450px] flex flex-col items-center justify-center gap-12">
        <h1 className="max-w-3xl font-bold text-center text-white text-7xl">
          Unlock your business potential
        </h1>
        <p className="max-w-2xl text-center text-white">
          Buzzle is your strategic ally in the world of business intelligence.
          Unlock the power of data-driven decision-making with our cutting-edge
          KPI tracking SaaS platform.
        </p>
        <div className="email rounded-lg w-[400px] h-16 flex  gap-24 px-3 border-[1px] border-slate-500 bg-transparent">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Business Email"
            className="items-center h-10 my-2 text-white bg-transparent border-none active:bg-transparent placeholder:text-lg placeholder:text-white"
          />
          <button className="w-44 h-10 my-2  bg-[#243dd3] rounded-lg text-white">Talk to Sales</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
