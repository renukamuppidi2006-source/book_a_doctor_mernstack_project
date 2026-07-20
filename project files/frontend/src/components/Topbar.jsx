import { useState } from "react";

const Topbar = () => {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className="bg-[#111827] border border-slate-700 rounded-3xl shadow-2xl px-8 py-6 flex justify-between items-center mb-8">

      {/* LEFT */}

      <div>

        <h1 className="text-5xl font-extrabold text-white">

          Dashboard

        </h1>

        <p className="text-gray-400 mt-2 text-lg">

          Welcome back 👋 Renuka

        </p>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative">

          <input
            type="text"
            placeholder="Search doctors..."
            className="w-80 bg-[#0f172a] border border-slate-700 rounded-2xl py-3 pl-12 pr-4 text-white placeholder-gray-500 outline-none focus:border-cyan-400 transition"
          />

          <span className="absolute left-4 top-3 text-xl">

            🔍

          </span>

        </div>

        {/* Notification */}

        <button className="w-12 h-12 rounded-full bg-[#0f172a] hover:bg-cyan-600 transition flex items-center justify-center text-2xl">

          🔔

        </button>

        {/* Dark Mode */}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-12 h-12 rounded-full bg-[#0f172a] hover:bg-yellow-500 transition flex items-center justify-center text-2xl"
        >

          {darkMode ? "☀️" : "🌙"}

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="profile"
            className="w-14 h-14 rounded-full border-2 border-cyan-500"
          />

          <div>

            <h2 className="text-white font-bold">

              Renuka

            </h2>

            <p className="text-gray-400 text-sm">

              Patient

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Topbar;