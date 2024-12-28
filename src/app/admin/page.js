"use client"; // Enable client-side features

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Initialize useRouter

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      router.push("/dashboard"); // Redirect to /dashboard
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200">
      <h1 className="text-2xl font-bold mb-4  text-black">Admin Login</h1>
      <form
        onSubmit={handleLogin}
        className="bg-black p-6 rounded shadow-md w-80"
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded  text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded  text-black"
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-emerald-500 text-black py-2 rounded hover:bg-emerald-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Admin;
