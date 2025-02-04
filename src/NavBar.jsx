import React, { useState } from 'react';
import Exchange from './Exchanges';
import logo from './images/ethereum.png';
import News from './News';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    
    <nav className="w-full h-[80px] bg-gray-800 flex justify-between items-center text-white px-6 sm:px-10 relative z-20">
      {/* Logo & Brand Name */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-10 sm:h-12 bg-transparent" />
        <h1 className="text-lg sm:text-xl font-semibold">CryptoVerse</h1>
      </div>

      {/* Hamburger Menu - Visible on Small Screens */}
      <div className="sm:hidden z-30">
        <button onClick={toggleMenu} className="text-white focus:outline-none flex">
          {isMenuOpen ? (
            <svg 
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {document.getElementById("11").style.height="280px"}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
              {document.getElementById("11").style.height="70px"}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden sm:flex gap-8 text-sm sm:text-base">
        <NavItem to="/" label="Home" />
        <NavItem to="/Cryptocurrencies" label="Cryptocurrencies" />
        <NavItem to="/Exchange" label="Exchange" />
        <NavItem to="/News" label="News" />
      </ul>

      {/* Mobile Menu (Ensure proper visibility without blocking the hamburger) */}
      <div
        className={`absolute top-[80px] left-0 w-full bg-gray-900 p-5 transition-all duration-300 ${
          isMenuOpen ? 'block' : 'hidden'
          } z-40`}
      >
        <ul className="flex flex-col gap-4 text-center">
          <NavItem to="/" label="Home" onClick={toggleMenu} />
          <NavItem to="/Cryptocurrencies" label="Cryptocurrencies" onClick={toggleMenu} />
          <NavItem to="/Exchange" label="Exchange" onClick={toggleMenu} />
          <NavItem to="/News" label="News" onClick={toggleMenu} />
        </ul>
      </div>
    </nav>
    <div id='11'> </div>
    </>
  );
}

const NavItem = ({ to, label, onClick }) => (
  <li>
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block py-2 px-4 rounded-md transition-all duration-200 ${
          isActive ? 'text-blue-500 font-bold' : 'hover:text-blue-400'
        }`
      }
    >
      {label}
    </NavLink>
  </li>
);

export default NavBar;
