import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-blue-50 to-blue-200 text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Welcome to TrekLanka!
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl">
          Explore Sri Lanka like never before. Plan your journey with our
          curated travel guides, local tips, and insider recommendations for an
          unforgettable adventure.
        </p>
        <a
          href="/explore"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium text-lg hover:bg-blue-600"
        >
          Explore Now
        </a>
      </header>
      <Footer />
    </div>
  );
};

export default Home;
