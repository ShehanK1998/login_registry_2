import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";

// Sample data: Replace with actual district names and details.
const districts = [
  { id: "colombo", name: "Colombo" },
  { id: "kandy", name: "Kandy" },
  { id: "galle", name: "Galle" },
  { id: "matara", name: "Matara" },
  { id: "jaffna", name: "Jaffna" },
  { id: "badulla", name: "Badulla" },
  { id: "anuradhapura", name: "Anuradhapura" },
  { id: "kurunegala", name: "Kurunegala" },
  { id: "trincomalee", name: "Trincomalee" },
  { id: "batticaloa", name: "Batticaloa" },
  { id: "nuwaraeliya", name: "Nuwara Eliya" },
  { id: "polonnaruwa", name: "Polonnaruwa" },
  { id: "matale", name: "Matale" },
  { id: "ratnapura", name: "Ratnapura" },
  { id: "moneragala", name: "Moneragala" },
  { id: "vavuniya", name: "Vavuniya" },
  { id: "mullaitivu", name: "Mullaitivu" },
  { id: "hambantota", name: "Hambantota" },
  { id: "gampaha", name: "Gampaha" },
  { id: "kilinochchi", name: "Kilinochchi" },
  { id: "ampara", name: "Ampara" },
  { id: "kalutara", name: "Kalutara" },
  { id: "matale", name: "Matale" },
  { id: "matarai", name: "Matarai" },
];

const Explore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header2 />
      <main className="flex-grow p-4">
        <h1 className="text-center text-2xl font-bold mb-4">Explore Sri Lanka</h1>

        {/* Grid of district cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {districts.map((district) => (
            <Link
              key={district.id}
              href={`/district/${district.id}`}
              className="bg-white p-4 border rounded-lg shadow-md cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <h2 className="text-center text-lg font-semibold">{district.name}</h2>
              {/* Optional image or other content */}
              <div className="h-40 bg-gray-200 mb-2"></div> {/* Placeholder for image */}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
