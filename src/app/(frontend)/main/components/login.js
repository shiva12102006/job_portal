"use client";
import { useState } from "react";

export default function login() {
  const [open, setOpen] = useState(false);
  const [formData,setformData] = useState({
   
    email: "",
    password: "",
   
  });
  const [loading, setLoading] = useState(false);
  const[message,setMessage] = useState("");

  const handleChange = (e) =>{
    setformData({...formData,[e.target.name]:e.target.value});

  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true); 
    setMessage("");
    try {
      const res =await fetch("/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(formData),
      });
      const data =await res.json();
      if(!res.ok){
        setMessage(data.message || "Registration failed");
      }else{
        setMessage("Registration successful! Please log in.");
      }

  }catch(error){
    setMessage("Something went wrong");
  }
  setLoading(false);
  }


 
  return (
    <>
      {/* Open Modal Button */}
      <button
        onClick={() => setOpen(true)}
        className="  text-white rounded"
      >
        Sign Up
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white w-[90%] max-w-md rounded-lg p-6 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              Create Account
            </h2>

            {/* Form */}
            <form className="space-y-4 "onSubmit={handleSubmit}>
             

              <label className="block text-sm font-medium text-gray-700">
                Enter your email
                </label>
                <input  
                 className=" text-black border w-full p-2" 
                type ="text"
                name="email"
                placeholder="Full name dalo"
                value={formData.email}
                onChange={handleChange}/>

             
              <label className="block text-sm font-medium text-gray-700">
                password
                </label>
                <input  
                 className=" text-black border w-full p-2" 
                type ="text"
                name="password"
                placeholder="Full name dalo"
                value={formData.password}
                onChange={handleChange}/>

                
          




            
              <button
                type="submit"
                disabled={loading}

                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
               

              >
                {loading ? "logining..." : "Login"}
              </button>
            </form>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
          </div>
        </div>
      )}
    </>
  );
}
