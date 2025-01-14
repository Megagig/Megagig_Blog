import { useState } from 'react';
import Image from './Image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between px-4 md:px-8 lg:px-12">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="Megagig logo" w={32} h={32} />
        <span>Bringing Tech To Your Doorstep</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? 'X' : '☰'}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-blue-400 ${
            isOpen ? 'left-0' : '-left-full'
          } transition-all duration-500`}
        >
          <a href="">Home</a>
          <a href="">Portfolio</a>
          <a href="">Services</a>
          <div className="relative group">
            <a href="" className="group-hover:text-gray-700">
              Blog
            </a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg ">
              <a href="" className="block px-4 py-2">
                Trending
              </a>
              <a href="" className="block px-4 py-2">
                Most Popular
              </a>
            </div>
          </div>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 🚀
            </button>
          </a>
        </div>
      </div>
      {/* DESKTOP MENU  */}
      {/* DESKTOP MENU  */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="">Home</a>
        <a href="">Portfolio</a>
        <a href="">Services</a>
        <div className="relative group">
          <a href="" className="group-hover:text-gray-700">
            Blog
          </a>
          <div className="absolute hidden group-hover:block bg-white shadow-lg">
            <a href="" className="block px-4 py-2">
              Trending
            </a>
            <a href="" className="block px-4 py-2">
              Most Popular
            </a>
          </div>
        </div>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login 🚀
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
