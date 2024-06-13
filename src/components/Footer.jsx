import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} HealthHelp. All rights reserved.</p>
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mt-2">
          <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
          <a href="/contact" className="hover:text-gray-400">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
