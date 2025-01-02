"use client";

import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Header2 from '@/components/Header2';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: '',
    review: '',
    rating: '',
  });

  useEffect(() => {
    // Fetch reviews from the database
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      const addedReview = await response.json();
      setReviews((prev) => [
        { ...newReview, id: addedReview.id, created_at: new Date() },
        ...prev,
      ]);
      setNewReview({ name: '', review: '', rating: '' });
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header2 />
      <main className="flex-grow p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          User Reviews & Feedback
        </h1>

        {/* Add Review Form */}
        <form
          className="max-w-xl mx-auto mb-8 p-6 bg-white rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a Review</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="review">
              Review
            </label>
            <textarea
              id="review"
              name="review"
              value={newReview.review}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Write your feedback"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="rating">
              Rating (1-5)
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              min="1"
              max="5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Review
          </button>
        </form>

        {/* Display Reviews */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{review.name}</h2>
              <p className="text-gray-600 mb-4">{review.review}</p>
              <div className="flex items-center">
                <span className="font-bold text-yellow-500 mr-2">
                  {"★".repeat(review.rating)}
                </span>
                <span className="text-gray-500">({review.rating}/5)</span>
              </div>
              <p className="text-sm text-gray-400">{new Date(review.created_at).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
