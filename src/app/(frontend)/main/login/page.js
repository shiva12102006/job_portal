"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("datannnnnnnnnnnnn",data)

      if (!res.ok) {
        setMessage(data.message || "Invalid email or password");
      } else {
        // ✅ Corrected
        localStorage.setItem("token", data.token);
        localStorage.setItem("users", JSON.stringify(data.user));
        window.dispatchEvent(new Event("userChanged"));

        console.log(data.user.name);

       


        router.push("/");
        router.refresh();
      }
    } catch (error) {
      setMessage("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white w-[90%] max-w-md rounded-lg p-6 shadow-lg">

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login to your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              className="text-black border w-full p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              className="text-black border w-full p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-red-500">
            {message}
          </p>
        )}

      </div>
    </div>
  );
}
