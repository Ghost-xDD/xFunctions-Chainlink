import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = ({ bgColor, textColor, menuColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className={`border-gray-200 border-b-[1px] mb-12 4`}>
      <div className="mx-[40px] flex justify-between align-items py-4">
        <Link href="/dashboard">
          x<span className={` text-${textColor}`}>Functions</span>{' '}
        </Link>
        <button
          onClick={toggleNavbar}
          className={`navbar-toggle transition-all duration-300 text-${textColor}`}
        >
          <RxHamburgerMenu
            className={` text-3xl`}
            style={{ color: textColor }}
          />
        </button>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black opacity-90 z-10 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="text-white border-b-2">
            <h1 className="ml-[30px] mt-[25px] pb-6">xFunctions</h1>
          </div>
          <button
            className="absolute top-0 right-4 m-4 text-white border-[1px] p-2 border-gray-500 font-bold"
            onClick={closeNavbar}
          >
            <AiOutlineClose />
          </button>
          <ul className="flex flex-col items-start uppercase text-lg justify-start space-y-4 text-white animate-slide-down mt-20 ml-12 transition-all duration-300">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Functions</a>
            </li>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">Connect Wallet</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
