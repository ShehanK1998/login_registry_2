"use client"; // Enable client-side features

import React, { useState } from "react";

const Dashboard = () => {
  // State for the current active section
  const [activeSection, setActiveSection] = useState("places");

  // State for each section
  const [places, setPlaces] = useState([]);
  const [accommodation, setAccommodation] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [transport, setTransport] = useState([]);

  // State for form input
  const [newPlace, setNewPlace] = useState({ name: "", description: "" });
  const [newAccommodation, setNewAccommodation] = useState({
    name: "",
    description: "",
  });
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    description: "",
  });
  const [newTransport, setNewTransport] = useState({
    name: "",
    description: "",
  });

  // Add Item Functions
  const handleAddPlace = (e) => {
    e.preventDefault();
    setPlaces([...places, { ...newPlace, id: places.length + 1 }]);
    setNewPlace({ name: "", description: "" });
  };

  const handleAddAccommodation = (e) => {
    e.preventDefault();
    setAccommodation([
      ...accommodation,
      { ...newAccommodation, id: accommodation.length + 1 },
    ]);
    setNewAccommodation({ name: "", description: "" });
  };

  const handleAddRestaurant = (e) => {
    e.preventDefault();
    setRestaurants([
      ...restaurants,
      { ...newRestaurant, id: restaurants.length + 1 },
    ]);
    setNewRestaurant({ name: "", description: "" });
  };

  const handleAddTransport = (e) => {
    e.preventDefault();
    setTransport([...transport, { ...newTransport, id: transport.length + 1 }]);
    setNewTransport({ name: "", description: "" });
  };

  // Handle Update and Delete
  const handleUpdate = (id, section, name, description) => {
    if (section === "places") {
      const updatedPlaces = places.map((place) =>
        place.id === id ? { ...place, name, description } : place
      );
      setPlaces(updatedPlaces);
    } else if (section === "accommodation") {
      const updatedAccommodation = accommodation.map((acc) =>
        acc.id === id ? { ...acc, name, description } : acc
      );
      setAccommodation(updatedAccommodation);
    } else if (section === "restaurants") {
      const updatedRestaurants = restaurants.map((restaurant) =>
        restaurant.id === id ? { ...restaurant, name, description } : restaurant
      );
      setRestaurants(updatedRestaurants);
    } else if (section === "transport") {
      const updatedTransport = transport.map((trans) =>
        trans.id === id ? { ...trans, name, description } : trans
      );
      setTransport(updatedTransport);
    }
  };

  const handleDelete = (id, section) => {
    if (section === "places") {
      const updatedPlaces = places.filter((place) => place.id !== id);
      setPlaces(updatedPlaces);
    } else if (section === "accommodation") {
      const updatedAccommodation = accommodation.filter((acc) => acc.id !== id);
      setAccommodation(updatedAccommodation);
    } else if (section === "restaurants") {
      const updatedRestaurants = restaurants.filter(
        (restaurant) => restaurant.id !== id
      );
      setRestaurants(updatedRestaurants);
    } else if (section === "transport") {
      const updatedTransport = transport.filter((trans) => trans.id !== id);
      setTransport(updatedTransport);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        onClick={() => (window.location.href = "/")}
      >
        Logout
      </button>
    </div>
  </div>
      {/* Navbar */}
      <nav className="mb-6 w-full bg-blue-500 p-4">
        <ul className="flex justify-around">
          <li>
            <button
              onClick={() => setActiveSection("places")}
              className={`text-white font-semibold ${
                activeSection === "places" ? "underline" : ""
              }`}
            >
              Places
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("accommodation")}
              className={`text-white font-semibold ${
                activeSection === "accommodation" ? "underline" : ""
              }`}
            >
              Accommodation
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("restaurants")}
              className={`text-white font-semibold ${
                activeSection === "restaurants" ? "underline" : ""
              }`}
            >
              Restaurants
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("transport")}
              className={`text-white font-semibold ${
                activeSection === "transport" ? "underline" : ""
              }`}
            >
              Transport
            </button>
          </li>
        </ul>
      </nav>

      {/* Render Section Based on Active Selection */}
      {activeSection === "places" && (
        <div className="w-80 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add Place</h2>
          <form
            onSubmit={handleAddPlace}
            className="bg-white p-6 rounded shadow-md"
          >
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                value={newPlace.name}
                onChange={(e) =>
                  setNewPlace({ ...newPlace, name: e.target.value })
                }
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Description
              </label>
              <input
                type="text"
                value={newPlace.description}
                onChange={(e) =>
                  setNewPlace({ ...newPlace, description: e.target.value })
                }
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Add Place
            </button>
          </form>

          {/* Display the data in a Table */}
          <table className="mt-4 w-full table-auto border-collapse bg-white shadow-md">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {places.map((place) => (
                <tr key={place.id} className="text-sm border-b">
                  <td className="px-4 py-2">{place.name}</td>
                  <td className="px-4 py-2">{place.description}</td>
                  <td className="px-4 py-2 flex justify-around">
                    <button
                      onClick={() =>
                        handleUpdate(
                          place.id,
                          "places",
                          prompt("Update name:", place.name),
                          prompt("Update description:", place.description)
                        )
                      }
                      className="text-blue-500"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(place.id, "places")}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeSection === "accommodation" && (
        <div className="w-80 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add Accommodation</h2>
          <form
            onSubmit={handleAddAccommodation}
            className="bg-white p-6 rounded shadow-md"
          >
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                value={newAccommodation.name}
                onChange={(e) =>
                  setNewAccommodation({
                    ...newAccommodation,
                    name: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Description
              </label>
              <input
                type="text"
                value={newAccommodation.description}
                onChange={(e) =>
                  setNewAccommodation({
                    ...newAccommodation,
                    description: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Add Accommodation
            </button>
          </form>

          {/* Display the data in a Table */}
          <table className="mt-4 w-full table-auto border-collapse bg-white shadow-md">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {accommodation.map((acc) => (
                <tr key={acc.id} className="text-sm border-b">
                  <td className="px-4 py-2">{acc.name}</td>
                  <td className="px-4 py-2">{acc.description}</td>
                  <td className="px-4 py-2 flex justify-around">
                    <button
                      onClick={() =>
                        handleUpdate(
                          acc.id,
                          "accommodation",
                          prompt("Update name:", acc.name),
                          prompt("Update description:", acc.description)
                        )
                      }
                      className="text-blue-500"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(acc.id, "accommodation")}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeSection === "restaurants" && (
        <div className="w-80 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add Restaurant</h2>
          <form
            onSubmit={handleAddRestaurant}
            className="bg-white p-6 rounded shadow-md"
          >
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                value={newRestaurant.name}
                onChange={(e) =>
                  setNewRestaurant({ ...newRestaurant, name: e.target.value })
                }
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Description
              </label>
              <input
                type="text"
                value={newRestaurant.description}
                onChange={(e) =>
                  setNewRestaurant({
                    ...newRestaurant,
                    description: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Add Restaurant
            </button>
          </form>

          {/* Display the data in a Table */}
          <table className="mt-4 w-full table-auto border-collapse bg-white shadow-md">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((restaurant) => (
                <tr key={restaurant.id} className="text-sm border-b">
                  <td className="px-4 py-2">{restaurant.name}</td>
                  <td className="px-4 py-2">{restaurant.description}</td>
                  <td className="px-4 py-2 flex justify-around">
                    <button
                      onClick={() =>
                        handleUpdate(
                          restaurant.id,
                          "restaurants",
                          prompt("Update name:", restaurant.name),
                          prompt("Update description:", restaurant.description)
                        )
                      }
                      className="text-blue-500"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(restaurant.id, "restaurants")}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeSection === "transport" && (
        <div className="w-80 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add Transport</h2>
          <form
            onSubmit={handleAddTransport}
            className="bg-white p-6 rounded shadow-md"
          >
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                value={newTransport.name}
                onChange={(e) =>
                  setNewTransport({ ...newTransport, name: e.target.value })
                }
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Description
              </label>
              <input
                type="text"
                value={newTransport.description}
                onChange={(e) =>
                  setNewTransport({
                    ...newTransport,
                    description: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Add Transport
            </button>
          </form>

          {/* Display the data in a Table */}
          <table className="mt-4 w-full table-auto border-collapse bg-white shadow-md">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transport.map((trans) => (
                <tr key={trans.id} className="text-sm border-b">
                  <td className="px-4 py-2">{trans.name}</td>
                  <td className="px-4 py-2">{trans.description}</td>
                  <td className="px-4 py-2 flex justify-around">
                    <button
                      onClick={() =>
                        handleUpdate(
                          trans.id,
                          "transport",
                          prompt("Update name:", trans.name),
                          prompt("Update description:", trans.description)
                        )
                      }
                      className="text-blue-500"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(trans.id, "transport")}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
