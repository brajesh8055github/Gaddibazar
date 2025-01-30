import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Photos/gb_logo.svg";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-400 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Links for larger screens */}
      <div className="hidden md:flex space-x-6 items-center">

        <div className="relative group">
          <button onClick={() => toggleDropdown("city")} className="flex items-center gap-1 text-white hover:text-blue-600 border rounded-full py-1 px-4">
            Chennai <FiChevronDown />
          </button>
          {openDropdown === "city" && (
            <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md py-2 w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Delhi</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Patna</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Mumbai</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Banglore</a>

            </div>
          )}
        </div>
        <div className="relative group">
          <button onClick={() => toggleDropdown("language")} className="flex items-center gap-1 text-white hover:text-blue-600 border rounded-full py-1 px-4">
            English <FiChevronDown />
          </button>
          {openDropdown === "language" && (
            <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md py-2 w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Hindi</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">English</a>
            </div>
          )}
        </div>
        <button className=" px-6 py-1 border border-white text-black bg-white rounded-full hover:bg-white-50">Login</button>

      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl text-gray-700">
          {menuOpen ? <IoClose /> : <TiThMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-start p-4 space-y-4 md:hidden">
          <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Business</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>About</Link>
          <Link to="/advice" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Advice</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>FAQ</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Reviews</Link>
          <Link to="/therapist" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Therapist Jobs</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Contact</Link>
          <button className="w-full px-4 py-2 border border-white text-white rounded hover:bg-blue-700">Login</button>
          <button className="w-full px-4 py-2 bg-white text-green-800 rounded hover:bg-green-700">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;