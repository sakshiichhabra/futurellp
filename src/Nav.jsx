import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-yellow-500 text-black shadow-lg">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6 lg:px-16">
        {/* Left Section: Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src="./images/logo.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-lg font-bold">FutureVue Solutions LLP</h1>
        </div>

        {/* Hamburger Menu (Visible on small screens) */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
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
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links (Hidden on small screens) */}
        <ul className="hidden sm:flex space-x-6 text-lg">
          {["Home", "About Us", "Services", "Leadership", "Contact Us"].map(
            (item, index) => (
              <li key={index} className="relative group">
                <a
                  href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                  className="text-lg font-medium hover:text-black transition-colors duration-50"
                >
                  {item}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-200 group-hover:w-full"></span>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="sm:hidden bg-yellow-500">
          <ul className="flex flex-col space-y-2 px-4 py-3">
            {["Home", "About Us", "Services", "Leadership", "Contact Us"].map(
              (item, index) => (
                <li key={index} className="relative group">
                  <a
                    href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                    className="text-lg font-medium hover:text-black transition-colors duration-50"
                  >
                    {item}
                  </a>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-200 group-hover:w-full"></span>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
