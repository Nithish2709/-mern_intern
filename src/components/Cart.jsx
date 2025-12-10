import React from "react";

export default function Cart({ cart, setcart }) {
  const removeItem = (id) => {
    setcart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen w-full bg-cyan-200 px-6 py-12">
      
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        
        <h1 className="text-3xl font-bold mb-6 text-center">
          Your Cart
        </h1>

        {/* ✅ Empty Cart */}
        {cart.length === 0 && (
          <p className="text-center text-gray-600">
            Your cart is empty 🛒
          </p>
        )}

        {/* ✅ Cart Items */}
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b py-5"
          >
            <div className="flex items-center gap-4">
              
              {/* ✅ Image (if available) */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              )}

              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-red-600 font-bold">₹{item.price}</p>
              </div>
            </div>

            {/* ✅ Remove Button */}
            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Remove
            </button>
          </div>
        ))}

        {/* ✅ Footer */}
        {cart.length > 0 && (
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-semibold">
              Total Items: {cart.length}
            </h2>

            <button
              onClick={() => setcart([])}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-black transition"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
