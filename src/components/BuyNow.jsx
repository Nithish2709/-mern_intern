import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../utils/api";

export default function BuyNow() {
  const { id } = useParams();
  const p = products.find((p) => p.id === parseInt(id));

  if (!p)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Product not found
      </div>
    );

  return (
    <div className="min-h-screen w-full bg-cyan-200 flex items-center justify-center px-4 py-10">
      
      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-lg p-8 text-center">
        
        {/* ✅ Success Message */}
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        {/* ✅ Product Image */}
        <div className="flex justify-center mb-6">
          <img
            src={p.image}
            alt={p.name}
            className="w-72 h-72 object-contain rounded-xl"
          />
        </div>

        {/* ✅ Product Info */}
        <h2 className="text-2xl font-semibold mb-2">{p.name}</h2>
        <p className="text-red-600 text-xl font-bold mb-4">₹{p.price}</p>

        <p className="text-gray-600 mb-8">{p.description}</p>

        {/* ✅ Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>

    </div>
  );
}
