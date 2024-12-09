'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      alert('Login successful!');
      console.log('Token:', data.token);
      router.push('/'); // Redirect to home or dashboard
    } else {
      const error = await response.json();
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* <Header /> */}
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-600">
          TrekLanka Login
        </h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
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
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              required
            />
          </div>
          {/* Login Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
            >
              Login
            </button>
          </div>
        </form>
        {/* Additional Links */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href="/users/register"
            className="font-medium text-blue-500 hover:underline"
          >
            Sign up
          </a>
        </p>
        <p className="mt-2 text-sm text-center text-gray-600">
          Forgot password?{" "}
          <a
            href="/forgot-password"
            className="font-medium text-blue-500 hover:underline"
          >
            Reset here
          </a>
        </p>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
