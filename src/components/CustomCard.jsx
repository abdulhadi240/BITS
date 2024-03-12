import ImageData from './ImageData'
import React from "react";
const CustomCard = ({index , title , description , imageUrl , reversed,large}) => {
  return (
    <div className={reversed ? 'flex justify-center flex-row-reverse gap-44' : 'flex justify-center gap-44'}>
      <div className="flex flex-col gap-6">
        <div className="flex gap-10">
          <div className="w-10 h-10 border-2 border-blue-500 rounded-lg shadow-xl index">
            <h1 className="flex items-center justify-center text-2xl text-center">{index}</h1>
          </div>
          <div className="text-2xl font-semibold title">{title}</div>
        </div>
        <div className="w-[550px] description tracking-wider">{description}</div>
        <div className="button">
            <button className="h-12 mt-16 border-2 rounded-lg w-28">Learn More</button>
        </div>
      </div>
      <ImageData large={large} imageUrl={imageUrl}/>

    </div>
  );
};

export default CustomCard;
