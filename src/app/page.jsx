import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header2 />
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-emerald-50 to-emerald-200 text-center">
        <h1 className="text-4xl font-extrabold text-sky-800 mb-4">
          Welcome to TrekLanka!
        </h1>
        <p className="text-lg text-teal-700 mb-6 max-w-2xl">
          Explore Sri Lanka like never before. Plan your journey with our
          curated travel guides, local tips, and insider recommendations for an
          unforgettable adventure.
        </p>
        <a
          href="/explore"
          className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-medium text-lg hover:bg-indigo-600"
        >
          Explore Now
        </a>

        {/* Register Button */}
        <div className="mt-6">
          <a
            href="/admin"
            className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium text-lg hover:bg-red-600"
          >
            Admin login
          </a>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default Home;
