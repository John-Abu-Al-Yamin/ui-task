import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActive(link); // Set the active link when clicked
  };

  return (
    <div className="relative">
      {/* Main Navbar */}
      <nav className="bg-white py-2  w-full">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Mobile menu button */}
            <button
              className="p-2 rounded-md block md:hidden cursor-pointer"
              onClick={toggleMenu}
            >
              <FiMenu size={24} />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className={`px-4 py-2  font-medium text-base rounded-md ${
                active === "home" ? "bg-[#B5B5B5]" : ""
              }`}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
            <a
              href="#"
              className={`px-4 py-2 text-base font-medium rounded-md ${
                active === "plans" ? "bg-[#B5B5B5]" : ""
              }`}
              onClick={() => handleLinkClick("plans")}
            >
              Plans
            </a>
            <a
              href="#"
              className={`px-4 py-2 text-base font-medium rounded-md ${
                active === "about" ? "bg-[#B5B5B5]" : ""
              }`}
              onClick={() => handleLinkClick("about")}
            >
              About
            </a>
            <a
              href="#"
              className={`px-4 py-2 text-base font-medium rounded-md ${
                active === "contact" ? "bg-[#B5B5B5]" : ""
              }`}
              onClick={() => handleLinkClick("contact")}
            >
              Contact us
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <a
              href="#"
              className="px-4 py-2 text-base font-medium hidden md:block"
            >
              Sign in
            </a>
            <a
              href="#"
              className="bg-[#35367E] text-base font-medium text-white px-4 py-2 rounded-md"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50 md:hidden`}
      >
        <div className="p-4 flex justify-end ">

          <button onClick={toggleMenu} className="p-2 cursor-pointer">
            <FiX size={24} />
          </button>
        </div>

        <div className="flex flex-col">
          <a href="#" className="bg-gray-200 px-4 py-3">
            Home
          </a>
          <a href="#" className="px-4 py-3">
            Plans
          </a>
          <a href="#" className="px-4 py-3">
            About
          </a>
          <a href="#" className="px-4 py-3">
            Contact us
          </a>
          <div className="border-t border-gray-200 mt-2 pt-2">
            <h3 className="font-medium px-4 py-2">Accounts</h3>
            <a href="#" className="px-4 py-3">
              Sign in
            </a>
            <a href="#" className="px-4 py-3">
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-500 ease-in-out"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}
