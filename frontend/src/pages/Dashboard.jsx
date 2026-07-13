import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Dashboard = () => {

  const navigate = useNavigate()

  const [darkMode, setDarkMode] = useState(false)

  return (

    <div
      className={`min-h-screen p-8 transition duration-500 ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-gradient-to-br from-blue-100 to-cyan-100"
      }`}
    >

      {/* HEADER */}

      <div className="flex justify-between items-center mb-12">

        <div>

          <h1 className="text-5xl font-extrabold text-blue-700">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Welcome to Book A Doctor
          </p>

        </div>

        <button

          onClick={() => setDarkMode(!darkMode)}

          className="bg-black text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-lg hover:scale-105 transition"
        >

          {darkMode ? "☀️ Light" : "🌙 Dark"}

        </button>

      </div>

      {/* CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* DOCTORS */}

        <div

          onClick={() => navigate("/doctors")}

          className={`${
            darkMode ? "bg-slate-800" : "bg-white"
          } p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer`}
        >

          <div className="text-5xl mb-4">
            👨‍⚕️
          </div>

          <h2 className="text-3xl font-bold text-blue-600 mb-3">
            Doctors
          </h2>

          <p className="text-gray-400 text-lg">
            Find expert doctors instantly
          </p>

        </div>

        {/* APPOINTMENTS */}

        <div

          onClick={() => navigate("/myappointments")}

          className={`${
            darkMode ? "bg-slate-800" : "bg-white"
          } p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer`}
        >

          <div className="text-5xl mb-4">
            📅
          </div>

          <h2 className="text-3xl font-bold text-green-500 mb-3">
            Appointments
          </h2>

          <p className="text-gray-400 text-lg">
            Manage all bookings easily
          </p>

        </div>

        {/* SETTINGS */}

        <div

          onClick={() => navigate("/settings")}

          className={`${
            darkMode ? "bg-slate-800" : "bg-white"
          } p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer`}
        >

          <div className="text-5xl mb-4">
            ⚙️
          </div>

          <h2 className="text-3xl font-bold text-purple-500 mb-3">
            Settings
          </h2>

          <p className="text-gray-400 text-lg">
            Customize your profile
          </p>

        </div>

        {/* AI ASSISTANT */}

        <div

          onClick={() => navigate("/chatbot")}

          className={`${
            darkMode ? "bg-slate-800" : "bg-white"
          } p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer`}
        >

          <div className="text-5xl mb-4">
            🤖
          </div>

          <h2 className="text-3xl font-bold text-pink-500 mb-3">
            AI Assistant
          </h2>

          <p className="text-gray-400 text-lg">
            Voice powered hospital helper
          </p>

        </div>

        {/* VIDEO CALL */}

        <div

          onClick={() => navigate("/videocall")}

          className={`${
            darkMode ? "bg-slate-800" : "bg-white"
          } p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer`}
        >

          <div className="text-5xl mb-4">
            🎥
          </div>

          <h2 className="text-3xl font-bold text-red-500 mb-3">
            Video Call
          </h2>

          <p className="text-gray-400 text-lg">
            Talk with doctors online
          </p>

        </div>

        {/* PAYMENTS */}

        <div

          onClick={() => navigate("/appointment")}

          className={`${
            darkMode ? "bg-slate-800" : "bg-white"
          } p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer`}
        >

          <div className="text-5xl mb-4">
            💳
          </div>

          <h2 className="text-3xl font-bold text-yellow-500 mb-3">
            Payments
          </h2>

          <p className="text-gray-400 text-lg">
            Secure online payment system
          </p>

        </div>

      </div>

    </div>

  )
}

export default Dashboard