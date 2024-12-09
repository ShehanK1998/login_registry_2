import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Footer Text */}
        <p className="text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} TrekLanka. All Rights Reserved.
        </p>
        {/* Footer Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
