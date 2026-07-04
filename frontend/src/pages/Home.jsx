import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-cyan-400">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-10 py-5 bg-white shadow-md">

        <div className="flex items-center gap-4">

          {/* DOCTOR LOGO */}
          <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-3xl">
            🩺
          </div>

          <h1 className="text-5xl font-bold text-blue-600">
            Book A Doctor
          </h1>

        </div>

        <div className="flex gap-5">

          <Link to="/login">
            <button className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-xl font-bold hover:bg-blue-100">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-800">
              Register
            </button>
          </Link>

        </div>

      </div>

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between px-16 py-20">

        {/* LEFT SIDE */}
        <div className="text-white max-w-2xl">

          <h1 className="text-8xl font-extrabold leading-tight">
            Your Health
            <br />
            Our Priority
          </h1>

          <p className="text-3xl mt-10 leading-relaxed">
            Book appointments with expert doctors instantly
            and manage your healthcare easily.
          </p>

          <Link to="/register">
            <button className="mt-12 bg-white text-blue-700 text-2xl font-bold px-10 py-5 rounded-2xl hover:scale-105 transition">
              Get Started
            </button>
          </Link>

        </div>

        {/* RIGHT SIDE */}
        <div className="mt-16 md:mt-0">

          <img
            src="https://cdn-icons-png.flaticon.com/512/2785/2785482.png"
            alt="doctor"
            className="w-[500px] drop-shadow-2xl"
          />

        </div>

      </div>

    </div>
  )
}

export default Home