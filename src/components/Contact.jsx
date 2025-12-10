import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-cyan-200 px-6 py-12 flex items-center justify-center">
      
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* ✅ LEFT: CONTACT INFO */}
        <div className="bg-red-600 text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          
          <p className="mb-4">
            We’d love to hear from you. Feel free to reach out anytime!
          </p>

          <div className="space-y-3 text-sm">
            <p>📍 Chennai, Tamil Nadu, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ support@myapp.com</p>
          </div>
        </div>

        {/* ✅ RIGHT: CONTACT FORM */}
        <div className="p-10">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

          <form className="space-y-5">
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
