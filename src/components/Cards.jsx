"use client";
import Image from "next/image";
import React from "react";
import {motion} from "framer-motion";
const Cards = ({ image, icon, title, des }) => {
  return (
    <div className="">
      <div className="w-auto p-2 bg-white shadow-inner rounded-xl">
        <Image
          className="border-[1px] border-[#c7c7c736] img rounded-xl"
          src={image}
          alt="image"
          width={340}
          height={340}
        />
      </div>
      <div className="flex flex-col gap-3 mt-4 text-black data w-80">
        <div className="flex gap-4 px-4 mt-3 line1">
          <div className=" icon">
            <Image src={icon} width={25} height={25} alt="image" />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xl font-semibold tit"
          >
            {title}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="px-3 text-sm des"
        >
          {des}
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;
