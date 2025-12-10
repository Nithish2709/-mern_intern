import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../utils/api";

export default function Product() {
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
      
      <div className="bg-white max-w-4xl w-full rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Image */}
        <div className="bg-gray-100 flex items-center justify-center p-6">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-96 object-contain rounded-xl"
          />
        </div>

        {/* Details */}
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{p.name}</h1>
          <p className="text-red-600 text-2xl font-semibold mb-4">
            ₹{p.price}
          </p>

          <p className="text-gray-600 mb-6">{p.description}</p>

          <Link to={`/buynow/${p.id}`}>
            <button className="w-full bg-red-600 text-white py-3 rounded-lg text-lg hover:bg-red-700 transition">
              Buy Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
