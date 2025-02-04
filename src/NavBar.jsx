import Exchange from './Exchanges';
import logo from './images/ethereum.png';
import News from './News';
import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <div className="w-full h-[100px] bg-gray-700 flex flex-wrap justify-between items-center text-white px-6">
      {/* Logo & Brand Name */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-14 bg-transparent" />
        <h1 className="text-lg sm:text-xl">CryptoVerse</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 sm:gap-8 text-sm sm:text-base">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/Cryptocurrencies" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>Cryptocurrencies</NavLink>
        </li>
        <li>
          <NavLink to="/Exchange" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>Exchange</NavLink>
        </li>
        <li>
          <NavLink to="/News" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>News</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
