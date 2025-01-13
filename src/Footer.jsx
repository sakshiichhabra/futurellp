import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-6 border-t-2 bg-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Section: Company Info */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold">© 2025 FutureVue Solutions LLP. All rights reserved.</h2>
            
          </div>

          {/* Center Section: Links */}
          

          {/* Right Section: Social Media */}
          <div className="flex space-x-4">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4e1c1] transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.03 3.683 9.19 8.5 9.878v-6.988H8.35v-2.89h2.15v-2.2c0-2.13 1.298-3.295 3.195-3.295.913 0 1.698.068 1.926.098v2.23h-1.32c-1.036 0-1.238.492-1.238 1.216v1.594h2.475l-.322 2.89h-2.153V22C18.317 21.19 22 17.03 22 12z" />
              </svg>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4e1c1] transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.531A8.36 8.36 0 0022 5.92a8.19 8.19 0 01-2.357.646A4.11 4.11 0 0021.447 4.2a8.233 8.233 0 01-2.606.996A4.107 4.107 0 0015.446 3c-2.266 0-4.102 1.836-4.102 4.102 0 .322.036.637.106.938A11.655 11.655 0 013 4.893a4.093 4.093 0 001.27 5.472 4.07 4.07 0 01-1.856-.512v.052c0 2.263 1.61 4.15 3.747 4.578a4.095 4.095 0 01-1.852.07 4.108 4.108 0 003.833 2.853A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4e1c1] transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.567c0-1.328-.026-3.036-1.85-3.036-1.851 0-2.135 1.445-2.135 2.939v5.664H9.35V9.112h3.414v1.548h.047c.475-.9 1.636-1.85 3.366-1.85 3.598 0 4.262 2.367 4.262 5.448v6.194zM5.337 7.433a2.062 2.062 0 11-.001-4.124 2.062 2.062 0 010 4.124zm1.772 13.019H3.565V9.112h3.544v11.34z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        
      </div>
    </footer>
  );
};

export default Footer;
