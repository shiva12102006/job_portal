"use client";
import Image from "next/image";




export default function Contact(){
    return (
    <section className="min-h-screen bg-gray-500 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Image Section */}
        <div className="bg-gray-200 flex items-center justify-center p-8">
          <div className="w-full h-[400px] relative">
            <Image
              src="/contact.jpg"   // apni image public folder me daalna
              alt="Contact Us"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-500 mb-8">
            Have questions about job listings or recruitment? 
            Our team is here to help.
          </p>

          <form className="space-y-6">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Job inquiry / Employer support"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}