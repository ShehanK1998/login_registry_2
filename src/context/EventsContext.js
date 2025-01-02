"use client"; // Mark this file as a client component

import { createContext, useContext, useState } from "react";

// Create a context
const EventsContext = createContext();

// Custom hook to use the Events context
export const useEvents = () => {
  return useContext(EventsContext);
};

// Provider component to wrap around your application
export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  return (
    <EventsContext.Provider value={{ events, setEvents }}>
      {children}
    </EventsContext.Provider>
  );
};
