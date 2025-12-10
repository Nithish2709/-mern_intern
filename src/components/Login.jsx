import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setE] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // ✅ prevents page reload
    localStorage.setItem("email", email);
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full bg-cyan-200 flex items-center justify-center px-4">
      
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
        
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Email Field */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setE(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg text-lg hover:bg-red-700 transition"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  );
}
