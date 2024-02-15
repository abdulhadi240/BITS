"use client";

import Image from "next/image";
import { Tabs } from "./tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-xl font-bold text-white rounded-2xl md:text-4xl ">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-xl font-bold text-white rounded-2xl md:text-4xl bg-gradient-to-br from-[#243DD3] to-[#4763ff]">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-xl font-bold text-white rounded-2xl md:text-4xl bg-gradient-to-br from-[#243DD3] to-[#4763ff]">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-xl font-bold text-white rounded-2xl md:text-4xl bg-gradient-to-br from-[#243DD3] to-[#4763ff]">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="relative w-full h-full p-10 overflow-hidden text-xl font-bold text-white rounded-2xl md:text-4xl bg-gradient-to-br from-[#243DD3] to-[#4763ff]">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
