import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-cyan-200 px-6 py-12">
      
      {/* ✅ Hero Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* ✅ Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-red-600">My App</span>
          </h1>
          
          <p className="text-gray-700 text-lg mb-6">
            Discover premium products at the best prices.  
            Shop smart, shop fast, and enjoy secure payments with instant delivery.
          </p>

          <div className="flex gap-4">
            <Link
              to="/products"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Shop Now
            </Link>

            <Link
              to="/about"
              className="border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* ✅ Right Image */}
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="Shopping"
            className="w-80 md:w-96"
          />
        </div>
      </div>

      {/* ✅ Features Section */}
      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">Quick and safe doorstep delivery.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
          <p className="text-gray-600">Your data and money are always safe.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
          <p className="text-gray-600">Only the best items from trusted sellers.</p>
        </div>
      </div>

    </div>
  );
}
