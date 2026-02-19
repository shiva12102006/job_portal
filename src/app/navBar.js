"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Signup from "./(frontend)/main/components/singUp";

const Navbar = () => {
  const [users, setUsers] = useState({});
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // ✅ Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Check user on load (safe parse)
useEffect(() => {
  const loadUser = () => {
    try {
      const stored = localStorage.getItem("users"); // ✅ same key
      const parsed = stored ? JSON.parse(stored) : null;
      setUsers(parsed);
    } catch (e) {
      console.log(e);
    }
  };

  loadUser();
  window.addEventListener("userChanged", loadUser);

  return () => window.removeEventListener("userChanged", loadUser);
}, []);

  // ✅ Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("users"); // ✅ fixed key

    setUsers(null);
    setDropdown(false);

    router.push("/");
    router.refresh();
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out
      ${
        scrolled
          ? "w-[90%] mx-auto mt-4 rounded-full bg-gray-300 shadow-lg ml-10 border-4 border-blue-600 text-black"
          : "w-full bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-14">
        <div className="flex justify-between items-center h-14">

          {/* Logo */}
          <span className="text-2xl font-bold">MyLogo</span>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">

            <Link href="/" className="hover:text-indigo-400">Home</Link>
            <Link href="/main/About" className="hover:text-indigo-400">About</Link>
            <Link href="/main/bloge" className="hover:text-indigo-400">Blog</Link>
            <Link href="/main/servise" className="hover:text-indigo-400">Services</Link>
            <Link href="/main/contact" className="hover:text-indigo-400">Contact</Link>

            {/* 🔐 Auth Section */}
            {users ? (
              <div className="relative">

                {/* Avatar */}
                <div
                  onClick={() => setDropdown(!dropdown)}
                  className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full cursor-pointer select-none"
                >
                  {users?.name?.charAt(0)?.toUpperCase() || "U"}
                </div>

                {/* Dropdown */}
                {dropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg">

                    <button
                      onClick={() => {
                        router.push("/profile");
                        setDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </button>

                    <button
                      onClick={() => {
                        router.push("/dashboard");
                        setDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Dashboard
                    </button>

                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/main/login" className="hover:text-indigo-400">
                  Login
                </Link>

                <Signup />
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-white"
            >
              ☰
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
