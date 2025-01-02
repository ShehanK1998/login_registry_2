"use client";

import React from "react";
import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";

const events = [
  {
    id: 1,
    name: "Cues and Brews",
    date: "2025-01-05",
    description: "Kingsman Sports Group is excited to announce an international Snooker event in Colombo for January 2025, aimed at developing and popularising snooker in Sri Lanka.",
    location: "The Forum, Cinnamon Life, Colombo, Sri Lanka |",
    imageUrl: "https://lk-aps.bmscdn.com/Events/moviecard/cues-and-brews-et00005593-2024-12-10-t-19-55-20.jpg",
    bookingUrl: "https://lk.bookmyshow.com/events/cues-and-brews/ET00005593",
  },
  {
    id: 2,
    name: "Karthik Live In Colombo The Magic Tour",
    date: "2025-02-08",
    description: "Karthik, an acclaimed Indian playback singer, is known for his soulful and versatile voice. Born on November 7, 1977, in Chennai, Tamil Nadu, he has sung in multiple languages, including Tamil, Telugu, Kannada, Malayalam, and Hindi.",
    location: "N/A",
    imageUrl: "https://lk-aps.bmscdn.com/events/eventlisting/ET00005567.jpg",
    bookingUrl: "https://lk.bookmyshow.com/kandy-esala-peraherahttps://lk.bookmyshow.com/events/karthik-live-in-colombo-the-magic-tour/ET00005567",
  },
  {
    id: 3,
    name: "Lions Roar",
    date: "2025-01-24",
    description: "Lions District 306 C2 is organizing a fundraising event to support the establishment of a dialysis unit at the KDU Hospital.",
    location: "Galle Fort, Galle",
    imageUrl: "https://th.bing.com/th?id=OIF.Q%2bEBzy%2f6ojFWUlGhwvMKcA&rs=1&pid=ImgDetMain",
    bookingUrl: "https://allevents.in/colombo/sing-and-dance-with-gypsies/200027690465839",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-400">
      <Header2 />
      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">Ongoing Events in Sri Lanka</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={event.imageUrl}
                alt={event.name}
                className="w-full h-100 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-2xl font-semibold text-black">{event.name}</h2>
                  <p className="text-gray-500">{event.date}</p>
                  <p className="text-gray-700 mt-2">{event.description}</p>
                  <p className="text-gray-600 mt-2 italic">{event.location}</p>
                </div>
                <a
                  href={event.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-teal-600 text-white text-center py-2 px-4 rounded hover:bg-teal-700"
                >
                  Book Ticket
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
