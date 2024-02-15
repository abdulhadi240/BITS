"use client";
import { Button } from "./moving-border";
import { TypewriterEffectSmooth } from "./typewriter-effect";
export default function Foot() {
  const words = [
    {
      text: "Build",
      className: "text-black dark:text-black",
    },
    {
      text: "awesome",
      className: "text-black dark:text-black",
    },
    {
      text: "systems",
      className: "text-black dark:text-black",
    },
    {
      text: "with",
      className: "text-black dark:text-black",
    },
    {
      text: "BITS",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex bg-white flex-col items-center justify-center h-[40rem]  ">
      <p className="text-xs text-black sm:text-base ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col space-x-0 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <Button/>
      </div>
    </div>
  );
}
