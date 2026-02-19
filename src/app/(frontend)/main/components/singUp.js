"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Signup() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [formData,setformData] = useState({
    name: "",
    email: "",
    password: "",
    username:"",
    mobile:"",
    role:"employee"
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
      const res =await fetch("/auth/register",{
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
        console.log("Registration successful! Please log in.");
        router.push("/main/login");
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

            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
              Create Account
            </h2>

            {/* Form */}
            <form className="space-y-4 "onSubmit={handleSubmit}>
              <label className="block text-sm font-medium text-gray-700">
                Name
                </label>
                <input 
                className=" text-black border w-full p-2" 
                type ="text"
                name="name"
                placeholder="Full name dalo"
                value={formData.name}
                onChange={handleChange}/>

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
                username
                </label>
                <input  
                 className=" text-black border w-full p-2" 
                type ="text"
                name="username"
                placeholder="Full name dalo"
                value={formData.username}
                onChange={handleChange}/>

              <label className="block text-sm font-medium text-gray-700">
                mobile
                </label>
                <input  
                 className=" text-black border w-full p-2" 
                type ="text"
                name="mobile"
                placeholder="Full name dalo"
                value={formData.mobile}
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

                {["employee","employer"].map((role)=>(
                  <button 
                type="button"
              key={role}
              onClick={()=>setformData({...formData,role})}
              className={`block w-full bg-gray-200 text-gray-800 py-2 rounded mb-2 hover:bg-gray-300 ${
                formData.role === role ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          ))}




            
              <button
                type="submit"
                disabled={loading}

                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
               

              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
          </div>
        </div>
      )}
    </>
  );
}
