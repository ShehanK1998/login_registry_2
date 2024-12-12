import React from "react";

const Header = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          TrekLanka
        </a>
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <a
            href="/users/login"
            className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-800 text-white"
          >
            Login
          </a>
          <a
            href="/users/register"
            className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
