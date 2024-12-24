import React from "react";

const Header2 = () => {
  return (
    <header className="bg-sky-950 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold hover:text-gray-400">
          TrekLanka
        </a>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <a
            href="/explore"
            className="hover:text-gray-400 transition duration-300"
          >
            Explore
          </a>
          <a
            href="/about"
            className="hover:text-gray-400 transition duration-300"
          >
            Events
          </a>
          <a
            href="/contact"
            className="hover:text-gray-400 transition duration-300"
          >
            Reviews
          </a>
        </nav>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 px-4 py-2 rounded-lg text-black focus:outline-none focus:ring focus:ring-gray-300"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-cyan-800 text-white px-3 py-1 rounded-lg hover:bg-cyan-700">
            Go
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header2;
