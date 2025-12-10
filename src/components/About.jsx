import React from "react";

export default function About() {
  return (
    <div className="min-h-screen w-full bg-cyan-200 px-6 py-12">
      
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        
        {/* ✅ Title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          About Us
        </h1>

        {/* ✅ Intro */}
        <p className="text-gray-700 text-lg text-center mb-10">
          Welcome to <span className="font-semibold text-red-600">My App</span> — 
          your trusted destination for quality products at affordable prices.
        </p>

        {/* ✅ Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              My App is a modern e-commerce platform built to provide customers
              with a fast, reliable, and secure online shopping experience.
              We focus on quality, customer satisfaction, and continuous
              innovation.
            </p>
          </div>

          {/* Right */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="text-gray-600 space-y-3 list-disc list-inside">
              <li>High-quality products from trusted brands</li>
              <li>Fast and secure checkout</li>
              <li>Easy returns & refunds</li>
              <li>24/7 customer support</li>
            </ul>
          </div>
        </div>

        {/* ✅ Mission Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our mission is to make online shopping simple, affordable, and
            accessible to everyone, while maintaining the highest standards
            of quality and service.
          </p>
        </div>

      </div>
    </div>
  );
}
