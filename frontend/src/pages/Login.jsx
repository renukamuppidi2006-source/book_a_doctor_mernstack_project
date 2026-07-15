import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-6">

      {/* Background Glow */}

      <div className="absolute w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[180px] opacity-20 -top-32 -left-32"></div>

      <div className="absolute w-[450px] h-[450px] bg-purple-600 rounded-full blur-[180px] opacity-20 bottom-0 right-0"></div>

      {/* Main Container */}

      <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        {/* LEFT SIDE */}

        <div>

          <h1 className="text-6xl font-extrabold text-white leading-tight">

            Welcome Back

          </h1>

          <p className="text-gray-300 mt-6 text-xl leading-9">

            Securely access your healthcare dashboard, manage appointments,
            connect with doctors, and view medical reports.

          </p>

          <div className="mt-12">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2966/2966481.png"
              alt="Doctor"
              className="w-[420px] drop-shadow-2xl animate-pulse"
            />

          </div>

        </div>

        {/* LOGIN CARD */}

        <div className="backdrop-blur-3xl bg-white/10 border border-white/20 rounded-[25px] shadow-2xl p-5 w-full max-w-[350px] mx-auto">
          <h2 className="text-5xl font-bold text-white text-center">

            Login

          </h2>

          <p className="text-center text-gray-300 mt-3">

            Sign in to continue

          </p>

          {/* Email */}

          <div className="mt-10 relative">

            <FaEnvelope className="absolute left-5 top-5 text-cyan-400 text-xl" />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-14 pr-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:border-cyan-400 transition"
            />

          </div>

          {/* Password */}

          <div className="mt-6 relative">

            <FaLock className="absolute left-5 top-5 text-cyan-400 text-xl" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-14 pr-14 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:border-cyan-400 transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-5 text-white"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

          {/* Remember */}

          <div className="flex justify-between items-center mt-6">

            <label className="flex items-center gap-2 text-gray-300">

              <input type="checkbox" />

              Remember Me

            </label>

            <button className="text-cyan-400 hover:text-cyan-300">

              Forgot Password?

            </button>

          </div>

          {/* Login Button */}

          <button
            className="w-full mt-6 py-3 rounded-2xl font-bold text-xl
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:scale-105 transition duration-300
            text-white shadow-xl"
          >

            Login

          </button>

          {/* Divider */}

          <div className="flex items-center gap-4 mt-8">

            <div className="flex-1 h-[1px] bg-white/20"></div>

            <span className="text-gray-300">

              OR

            </span>

            <div className="flex-1 h-[1px] bg-white/20"></div>

          </div>

          {/* Social Buttons */}

          <div className="grid grid-cols-2 gap-4 mt-8">

            <button className="bg-white text-black py-3 rounded-xl font-semibold hover:scale-105 transition">

              Google

            </button>

            <button className="bg-slate-800 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">

              GitHub

            </button>

          </div>

          {/* Register */}

          <p className="text-center text-gray-300 mt-8">

            Don't have an account?

            <Link
              to="/register"
              className="text-cyan-400 font-bold ml-2 hover:text-cyan-300"
            >

              Register

            </Link>

          </p>

        </div>

      </div>

    </div>

  );

};

export default Login;