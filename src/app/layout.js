import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
// import { IconHome, IconMessage, IconUser } from "@tabler/";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const navItems = [
  {
    name: "Home",
    link: "/",
    // icon: <IconHome className="w-4 h-4 text-neutral-500 dark:text-white" />,
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="absolute overflow-x-hidden top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
        {children}
        </body>
    </html>
  );
}
