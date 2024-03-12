import Image from "next/image";
import Headline from "./Headline";

const navItems = [
  {
    name: "Home",
    link: "/",
    // icon: <IconHome className="w-4 h-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Demos",
    link: "/demo",
    // icon: <IconUser className="w-4 h-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Pricing",
    link: "/pricing",
    // icon: <IconUser className="w-4 h-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    // icon: <IconUser className="w-4 h-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    // icon: (
    //   <IconMessage className="w-4 h-4 text-neutral-500 dark:text-white" />
    // ),
  },
];

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 z-10 flex items-center justify-between w-full px-16 text-white">
        
          <div className="mr-4 logo">
            <Image src={'/logo1.png'} width={80} height={80} alt='logo'/>
          </div>
          <div className="flex gap-10 font-semibold navItems">
            {navItems.map((item, index) => (
              <a key={index} href={item.link} className="">
                {item.name}
              </a>
            ))}
          </div>
        
        <div className="flex items-center">
          <div className="mr-4 button">
            <button className="w-40 p-3 font-semibold border-[1px] rounded-lg">Book a Demo</button>
          </div>
          <div className="button">
            <button className="w-40 p-3 font-semibold text-white bg-blue-700 rounded-lg">Get Started</button>
          </div>
        </div>
      </div>
      
      <div className="relative h-screen bg-no-repeat bg-cover hero">
        <div className="relative image">
          <img src={"/image 2.png"} alt="hero" fetchPriority="true" />
        </div>
        <div>
          <Headline/>
        </div>
      </div>
    </>
  );
};

export default Hero;
