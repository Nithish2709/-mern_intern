import React from "react";
import { products } from "../utils/api";
import { Link } from "react-router-dom";

export default function Products({ setcart, cart }) {

  const addTocart = (product) => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    };
    setcart([...cart, item]);
  };

  return (
    <div className="min-h-screen w-full bg-cyan-200 py-10 px-6">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-lg p-5 flex flex-col hover:scale-105 transition"
          >
            {/* Image */}
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />

            {/* Info */}
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-red-600 font-bold">₹{p.price}</p>
            <p className="text-gray-600 text-sm mt-2 flex-grow">
              {p.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => addTocart(p)}
                className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
              >
                Add to Cart
              </button>

              <Link
                to={`/product/${p.id}`}
                className="flex-1 border border-red-600 text-red-600 text-center py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
