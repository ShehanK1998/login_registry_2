import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* About Content */}
      <main className="flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-green-50 to-green-200 text-center px-6">
        <h1 className="text-4xl font-bold text-green-600 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          TrekLanka is your ultimate travel companion for exploring the wonders
          of Sri Lanka. Our mission is to help you discover breathtaking
          destinations, hidden gems, and authentic local experiences. Whether
          you're a solo traveler, a couple, or a family, TrekLanka provides you
          with curated travel guides and expert recommendations for an
          unforgettable journey.
        </p>
        <div className="mt-8">
          <a
            href="/explore"
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium text-lg hover:bg-green-600"
          >
            Start Exploring
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
