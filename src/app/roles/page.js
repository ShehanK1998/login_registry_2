import React from "react";
import Link from "next/link";

const RoleSelection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-200 text-center">
      <h2 className="text-3xl font-bold text-green-600 mb-6">Select Your Role</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* User Card */}
        <Link href="/users/register">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <img
              src="/images/user.jpg" // Add your image path here
              alt="User"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-green-600">User Regitser</h3>
          </div>
        </Link>

        {/* Accommodation Provider Card */}
        <Link href="/accomodation/register">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <img
              src="/images/accommodation.jpg" // Add your image path here
              alt="Accommodation Provider"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-green-600">Accommodation Register</h3>
          </div>
        </Link>

        {/* Restaurant Owner Card */}
        <Link href="/register?role=restaurant-owner">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <img
              src="/images/restaurant.jpg" // Add your image path here
              alt="Restaurant Owner"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-green-600">Restaurant Register</h3>
          </div>
        </Link>

        {/* Vehicle Rental Card */}
        <Link href="/register?role=vehicle-rental">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <img
              src="/images/vehicle.jpg" // Add your image path here
              alt="Vehicle Rental Service"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-green-600">Vehicle Rental Service Register</h3>
          </div>
        </Link>

        {/* Three Wheel Driver Card */}
        <Link href="/register?role=three-wheel-driver">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all">
            <img
              src="/images/three-wheel.jpg" // Add your image path here
              alt="Three Wheel Driver"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-green-600">Three Wheel Driver Register</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RoleSelection;
