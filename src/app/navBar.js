"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import Signup from "@/app/(frontend)/main/components/singUp";
import login from "@/app/(frontend)/main/components/login";

const Navbar = () => {
  const[user , setUser] = useState();
  const [open, setOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 👇 Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` text-black fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out 
      ${scrolled 
        ? "w-[90%] mx-auto mt-4 rounded-full bg-gray-300 shadow-lg ml-10 border-4 border-blue-600" 
        : "w-full bg-transparent text-white text-extrabold"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-14">
        <div className="flex justify-between items-center h-14">

          {/* Logo */}
          <span className="text-2xl font-bold ">
            MyLogo
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className=" hover:text-indigo-400">
              Home
            </Link>
            <Link href="/main/About" className="  hover:text-indigo-400">
              About
            </Link>
            <Link href="/main/bloge" className=" hover:text-indigo-400">
              Blog
            </Link>
            <Link href="/main/servise" className=" hover:text-indigo-400">
              Services
            </Link>
            <Link href="/main/contact" className=" hover:text-indigo-400">
              Contact
            </Link>
            {user ? (
              <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-500 transition" onClick={() => setUser(0)}>
                <login />
              </button>
            ) : (
              <div 
             
                onClick={() => setShowSignup(true)} 
                className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-500 transition"
              >
                <Signup show={showSignup} onClose={() => setShowSignup(false)} />
              </div>
            )}
            
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-white">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
