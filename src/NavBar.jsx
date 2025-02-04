import React, { useState } from 'react';
import Exchange from './Exchanges';
import logo from './images/ethereum.png';
import News from './News';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
    <div className="w-full h-[100px] bg-gray-700 flex flex-wrap justify-between items-center text-white px-6">
      {/* Logo & Brand Name */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-14 bg-transparent" />
        <h1 className="text-lg sm:text-xl">CryptoVerse</h1>
      </div>

      {/* Hamburger Icon */}
      <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:flex sm:gap-6 sm:text-base absolute sm:static top-[100px] left-0 w-full sm:w-auto bg-gray-700 sm:bg-transparent flex-col sm:flex-row items-center py-4 sm:py-0`}
      >
        <li className="my-2 sm:my-0">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')}
            onClick={toggleMenu}
          >
            Home
          </NavLink>
        </li>
        <li className="my-2 sm:my-0">
          <NavLink
            to="/Cryptocurrencies"
            className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')}
            onClick={toggleMenu}
          >
            Cryptocurrencies
          </NavLink>
        </li>
        <li className="my-2 sm:my-0">
          <NavLink
            to="/Exchange"
            className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')}
            onClick={toggleMenu}
          >
            Exchange
          </NavLink>
        </li>
        <li className="my-2 sm:my-0">
          <NavLink
            to="/News"
            className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')}
            onClick={toggleMenu}
          >
            News
          </NavLink>
        </li>
      </ul>
    </div>
      <div className={isOpen? "h-50":"h-80px"}></div>
    </>
  );
}

export default NavBar;