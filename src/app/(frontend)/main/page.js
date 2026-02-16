"use client";

import Image from "next/image";
import ScrollingLogo from "./components/scrollingLogo";

export default function HomeMain() {
  return (
    <>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">

        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videoo.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Search and Find Your Dream Job
          </h1>
          <p className="mt-4 text-base sm:text-lg">
            For any profession
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
              Join Now
            </button>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center border border-blue-500">
            <h2 className="text-2xl font-bold text-blue-500">1000+</h2>
            <p className="mt-2 text-gray-600">Registered Users</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center border border-blue-500">
            <h2 className="text-2xl font-bold text-blue-500">1000+</h2>
            <p className="mt-2 text-gray-600">Available Jobs</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center border border-blue-500">
            <h2 className="text-2xl font-bold text-blue-500">1000+</h2>
            <p className="mt-2 text-gray-600">Registered Companies</p>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div className="flex justify-center">
            <Image
              src="/iiii.jpg"
              width={450}
              height={300}
              alt="Image"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
            <p>
              Online jobs provide flexible work opportunities that allow individuals to earn income from anywhere.
              With the growth of digital platforms, online jobs have become a reliable source of income for students and professionals.
              Skill-based online work helps people grow financially while improving their knowledge and experience.
            </p>
          </div>

        </div>
      </section>

      {/* BANNER SECTION */}
      <section className="h-64 w-full bg-[url('/slide3.webp')] bg-cover bg-center flex items-center justify-center">
      </section>

      {/* SCROLLING LOGOS */}
      <section className="py-10 bg-white">
        <ScrollingLogo />
      </section>

    </>
  );
}
