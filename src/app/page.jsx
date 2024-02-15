
import Testimonials from "@/components/Testimonials";
import MobileApp from "@/components/MobileApp";
import Foot from "@/components/Foot";
import {TabsDemo} from "@/components/Tab";
import Benefits from "@/components/Benefits";
import Work from "@/components/Work";
import Product from "@/components/Product";
import Hero from "@/components/Hero";



const products = [
  {
    title: "Product 2",
    link: "/product2",
    thumbnail: "/1.webp",
  },
  {
    title: "Product 3",
    link: "/product3",
    thumbnail: "/1.webp",
  },
  {
    title: "Product 1",
    link: "/product1",
    thumbnail: "/1.webp",
  },
  {
    title: "Product 2",
    link: "/product2",
    thumbnail: "/1.webp",
  },
  {
    title: "Product 3",
    link: "/product3",
    thumbnail: "/1.webp",
  },
  {
    title: "Product 1",
    link: "/product1",
    thumbnail: "/1.webp",
  },
  {
    title: "Product 2",
    link: "/product2",
    thumbnail: "/1.webp",
  },
  {
    title: "Product 3",
    link: "/product3",
    thumbnail: "/1.webp",
  },

  // Add more product objects as needed
];

export default function Home() {
  return (
     <>
     <div className="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
     <div>
      <Hero/>
     </div>
      <div className="mb-44">
        <MobileApp />
      </div>
      {/* <div>
        <TabsDemo/>
      </div> */}
      <div>
        <Benefits/>
      </div>
      <div>
        <Work/>
      </div>
      <div className="mt-64">
        <Product/>
      </div>
      <div className="">
        <Testimonials />
      </div>
      <Foot />
    </>
  );
}
