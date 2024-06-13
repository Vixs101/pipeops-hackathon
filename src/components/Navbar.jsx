import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-lg font-semibold">
          HealthHelp
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="/dashboard" className="text-white hover:text-gray-300">
            Dashboard
          </a>
          <a href="/appointments" className="text-white hover:text-gray-300">
            Appointments
          </a>
          <a href="/prescriptions" className="text-white hover:text-gray-300">
            Prescriptions
          </a>
          <a href="/messages" className="text-white hover:text-gray-300">
            Messages
          </a>
          <a href="/profile" className="text-white hover:text-gray-300">
            Profile
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="/dashboard" className="block px-4 py-2 text-white hover:bg-green-700">
            Dashboard
          </a>
          <a href="/appointments" className="block px-4 py-2 text-white hover:bg-green-700">
            Appointments
          </a>
          <a href="/prescriptions" className="block px-4 py-2 text-white hover:bg-green-700">
            Prescriptions
          </a>
          <a href="/messages" className="block px-4 py-2 text-white hover:bg-green-700">
            Messages
          </a>
          <a href="/profile" className="block px-4 py-2 text-white hover:bg-green-700">
            Profile
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
