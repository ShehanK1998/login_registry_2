'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function AccommodationSignup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    guesthouseName: '',
    address: '',
    contactNumber: '',
    rates: '',
    foodAvailability: '',
    images: null, // For image uploads
  });
  
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (key === 'images' && formData.images) {
          Array.from(formData.images).forEach((file) => {
            formDataToSend.append('images', file);
          });
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }

      const response = await fetch('/api/accommodations/register', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }

      alert('Accommodation registration successful!');
      router.push('/users/login');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-600">
          Accommodation Registration
        </h2>
        <form className="mt-6" onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Input */}
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
              required
            />
          </div>

          {/* Guesthouse Name Input */}
          <div className="mt-4">
            <label htmlFor="guesthouseName" className="block text-sm font-medium text-gray-700">
              Guesthouse Name
            </label>
            <input
              type="text"
              id="guesthouseName"
              name="guesthouseName"
              placeholder="Enter your guesthouse name"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
              required
            />
          </div>

          {/* Address Input */}
          <div className="mt-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact Number Input */}
          <div className="mt-4">
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              placeholder="Enter your contact number"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
              required
            />
          </div>

          {/* Rates Input */}
          <div className="mt-4">
            <label htmlFor="rates" className="block text-sm font-medium text-gray-700">
              Rates
            </label>
            <input
              type="text"
              id="rates"
              name="rates"
              placeholder="Enter rates"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
              required
            />
          </div>

          {/* Food Availability Input */}
          <div className="mt-4">
            <label htmlFor="foodAvailability" className="block text-sm font-medium text-gray-700">
              Food Availability
            </label>
            <input
              type="text"
              id="foodAvailability"
              name="foodAvailability"
              placeholder="Details about food availability"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
              required
            />
          </div>

          {/* Images Input */}
          <div className="mt-4">
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">
              Upload Images
            </label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:ring-offset-1"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
