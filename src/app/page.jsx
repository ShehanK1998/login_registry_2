"use client"; 

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/slideshow1.webp", // Replace with actual image paths
    "/images/slideshow2.webp",
    "/images/slideshow3.webp",
  ];

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header2 />
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-emerald-50 to-emerald-200 text-center overflow-hidden">
        {/* Slideshow */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl font-extrabold text-white mb-4"
          style={{ textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
            Welcome to TrekLanka!
          </h1>
          <p className="text-lg text-white mb-6 max-w-2xl"
          style={{ textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
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
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default Home;
