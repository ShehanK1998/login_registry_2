"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";

const places = [
  {
    id: 1,
    name: "Gangaramaya Temple",
    description: "A mix of modern architecture and cultural essence, ideal for exploring Sri Lankan heritage.",
    openingHours: "6:00 AM - 9:00 PM",
    locationLink: "https://goo.gl/maps/9NvmcE6X3A12",
    imageUrl: "https://th.bing.com/th/id/R.57d7d0e20c26282eb37b759d5d12496f?rik=b8u%2fZiL4SB19cw&pid=ImgRaw&r=0",
    details: {
      hotels: ["Gangaramaya Hotel", "Heritage Colombo Inn"],
      guestHouses: ["Temple View Guest House", "City Center Lodge"],
      transporters: ["City Cabs", "Colombo Express Transport"],
      drivers: ["Nimal - 0771234567", "Dilan - 0719876543"],
    },
  },
  {
    id: 2,
    name: "Galle Face Green",
    description: "A long stretch of lawn facing the Indian Ocean, perfect for evening strolls and street food.",
    openingHours: "Open 24 hours",
    locationLink: "https://goo.gl/maps/XFZn4e3Lm1N2",
    imageUrl: "https://ceylonpages.lk/wp-content/uploads/2020/03/galle-face-green-Cover.jpg",
    details: {
      hotels: ["Ocean View Hotel", "Green Plaza Inn"],
      guestHouses: ["Seaside Lodge", "Green Stay"],
      transporters: ["Rapid Transport", "Ocean Line Cabs"],
      drivers: ["Samantha - 0776543210", "Ajith - 0711239876"],
    },
  },
  {
    id: 3,
    name: "National Museum of Colombo",
    description: "The largest museum in Sri Lanka, showcasing the country's rich history and culture.",
    openingHours: "9:00 AM - 5:00 PM (Closed on Fridays)",
    locationLink: "https://goo.gl/maps/UXY7mF9BmTn",
    imageUrl: "https://th.bing.com/th/id/OIP.mg17Gp_2H1hmRN45w4KVUgHaEK?rs=1&pid=ImgDetMain",
    details: {
      hotels: ["Museum Hotel", "Cultural Stay Inn"],
      guestHouses: ["History View Guest House", "Central Lodge"],
      transporters: ["Museum Cabs", "City Ride"],
      drivers: ["Prasad - 0776541230", "Roshan - 0719873210"],
    },
  },
];

const Colombo = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleExploreClick = (place) => {
    setSelectedPlace(place);
  };

  const closePopup = () => {
    setSelectedPlace(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-400">
      <Header2 />
      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">Places to Visit in Colombo</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={place.imageUrl}
                alt={place.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-2xl font-semibold text-black">{place.name}</h2>
                  <p className="text-gray-700 mt-2">{place.description}</p>
                  <p className="text-gray-600 mt-2">Opening Hours: {place.openingHours}</p>
                </div>
                <div className="flex justify-between mt-4">
                  <a
                    href={place.locationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-600 text-white text-center py-2 px-4 rounded hover:bg-teal-700"
                  >
                    View Location
                  </a>
                  <button
                    onClick={() => handleExploreClick(place)}
                    className="bg-green-600 text-white text-center py-2 px-4 rounded hover:bg-green-700"
                  >
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedPlace && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-4/5 max-w-lg">
              <h2 className="text-2xl font-bold mb-4 text-black">{selectedPlace.name}</h2>
              <p className="mb-4 text-black">{selectedPlace.description}</p>
              <div>
                <h3 className="font-semibold text-lg  text-black" >Hotels:</h3>
                <ul className="list-disc list-inside  text-black">
                  {selectedPlace.details.hotels.map((hotel, index) => (
                    <li key={index}>{hotel}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mt-4  text-black">Guest Houses:</h3>
                <ul className="list-disc list-inside  text-black">
                  {selectedPlace.details.guestHouses.map((guestHouse, index) => (
                    <li key={index}>{guestHouse}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mt-4  text-black">Transporters:</h3>
                <ul className="list-disc list-inside  text-black">
                  {selectedPlace.details.transporters.map((transporter, index) => (
                    <li key={index}>{transporter}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mt-4  text-black">Nearby Three-Wheel Drivers:</h3>
                <ul className="list-disc list-inside  text-black">
                  {selectedPlace.details.drivers.map((driver, index) => (
                    <li key={index}>{driver}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={closePopup}
                className="mt-6 bg-red-600 text-black py-2 px-4 rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Colombo;
