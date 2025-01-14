import { useState } from 'react';
import Image from './Image';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between px-4 md:px-8 lg:px-12">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="Megagig logo" w={32} h={32} />
        <>Bringing Tech To Your Doorstep</>
      </Link>
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
          <Link to="/">Home</Link>
          <Link to="/">Portfolio</Link>
          <Link to="/">Services</Link>
          <div className="relative group">
            <Link to="" className="group-hover:text-gray-700">
              Blog
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-lg ">
              <Link to="" className="block px-4 py-2">
                Trending
              </Link>
              <Link to="" className="block px-4 py-2">
                Most Popular
              </Link>
            </div>
          </div>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 🚀
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU  */}
      {/* DESKTOP MENU  */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Portfolio</Link>
        <Link to="/">Services</Link>
        <div className="relative group">
          <Link to="/" className="group-hover:text-gray-700">
            Blog
          </Link>
          <div className="absolute hidden group-hover:block bg-white shadow-lg">
            <Link to="" className="block px-4 py-2">
              Trending
            </Link>
            <Link to="" className="block px-4 py-2">
              Most Popular
            </Link>
          </div>
        </div>
        <Link to="/">About</Link>
        <Link to="">Contact</Link>
        <Link to="/">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login 🚀
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
