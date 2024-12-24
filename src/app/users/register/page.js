'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/users/register', { // Updated the API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }

      alert('Signup successful!');
      router.push('/users/login'); // Redirect to login page
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* <Header /> */}
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-600">
          User Registration
        </h2>
        <form className="mt-6" onSubmit={handleSubmit}> {/* Added onSubmit handler */}
          {/* Username Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"  // Changed from "name" to "username" to match state
              placeholder="Enter your username"
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
              required
            />
          </div>
          {/* Email Input */}
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
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
          
          {/* Register Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:ring-offset-1"
            >
              Register
            </button>
          </div>
        </form>
        {/* Additional Links */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/users/login"
            className="font-medium text-green-500 hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
