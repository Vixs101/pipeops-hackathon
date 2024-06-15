// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-semibold">Good Morning</h1>
        <p className="text-gray-500">Welcome Back!</p>
      </div>
      <div className="flex items-center space-x-3">
      <div className="h-10 w-10 rounded-full bg-gray-300"></div>
        <div className="mr-4">
          <p className="font-semibold">John Adewale</p>
          <p className="text-sm text-gray-500">Patient</p>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
