import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8000/api/users/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      alert("Registration Successful ✅");

      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-6">

      {/* Background Blur */}
      <div className="absolute w-80 h-80 bg-cyan-500 rounded-full blur-[140px] opacity-20 top-20 left-20"></div>
      <div className="absolute w-80 h-80 bg-purple-600 rounded-full blur-[140px] opacity-20 bottom-20 right-20"></div>

      <div className="relative w-full max-w-md">

        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">

          <h1 className="text-4xl font-bold text-white text-center">
            Create Account
          </h1>

          <p className="text-center text-gray-300 mt-2 mb-8">
            Join Book A Doctor 🏥
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="flex items-center bg-white/10 rounded-xl px-4">
              <FaUser className="text-cyan-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full bg-transparent outline-none p-4 text-white placeholder-gray-300"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center bg-white/10 rounded-xl px-4">
              <FaEnvelope className="text-cyan-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full bg-transparent outline-none p-4 text-white placeholder-gray-300"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center bg-white/10 rounded-xl px-4">
              <FaLock className="text-cyan-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full bg-transparent outline-none p-4 text-white placeholder-gray-300"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center bg-white/10 rounded-xl px-4">
              <FaLock className="text-cyan-400" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full bg-transparent outline-none p-4 text-white placeholder-gray-300"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl text-lg font-bold hover:scale-105 transition duration-300"
            >
              Create Account
            </button>

          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-[1px] bg-gray-500"></div>
            <span className="text-gray-300">OR</span>
            <div className="flex-1 h-[1px] bg-gray-500"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <button
              type="button"
              className="flex justify-center items-center gap-2 bg-white text-gray-800 rounded-xl py-3 font-semibold hover:bg-gray-200 transition"
            >
              <FaGoogle className="text-red-500" />
              Google
            </button>

            <button
              type="button"
              className="flex justify-center items-center gap-2 bg-gray-900 text-white rounded-xl py-3 font-semibold hover:bg-black transition"
            >
              <FaGithub />
              GitHub
            </button>

          </div>

          <p className="text-center text-gray-300 mt-8">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-cyan-400 font-bold hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;