import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate()

  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-400">

      {/* HERO SECTION */}

      <div className="max-w-7xl mx-auto px-10 py-20 flex flex-col lg:flex-row items-center justify-between">

        {/* LEFT SIDE */}

        <div className="text-white max-w-3xl">

          <h1 className="text-7xl font-extrabold leading-tight mb-8">

            Your Health <br />

            Our Priority

          </h1>

          <p className="text-2xl text-blue-100 mb-10 leading-relaxed">

            Book appointments with expert doctors instantly,
            manage your medical records, use AI assistance,
            video consultation, voice booking and more.

          </p>

          <div className="flex gap-6">

            <button

              onClick={() => navigate("/register")}

              className="bg-white text-blue-700 px-10 py-5 rounded-2xl text-2xl font-bold hover:scale-105 transition shadow-2xl"
            >

              Get Started

            </button>

            <button

              onClick={() => navigate("/doctors")}

              className="border-2 border-white text-white px-10 py-5 rounded-2xl text-2xl font-bold hover:bg-white hover:text-blue-700 transition"
            >

              Find Doctors

            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="mt-16 lg:mt-0">

          <img

            src="https://cdn-icons-png.flaticon.com/512/387/387561.png"

            alt="doctor"

            className="w-[500px] drop-shadow-2xl animate-bounce"
          />

        </div>

      </div>

      {/* FEATURES */}

      <div className="bg-white rounded-t-[60px] px-10 py-20">

        <h1 className="text-6xl font-bold text-center text-blue-700 mb-20">
          Our Features
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">

          {/* CARD 1 */}

          <div className="bg-blue-50 p-10 rounded-3xl shadow-xl hover:scale-105 transition">

            <div className="text-6xl mb-6">👨‍⚕️</div>

            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              Expert Doctors
            </h2>

            <p className="text-gray-600 text-lg">
              Find experienced doctors instantly for every health issue.
            </p>

          </div>

          {/* CARD 2 */}

          <div className="bg-cyan-50 p-10 rounded-3xl shadow-xl hover:scale-105 transition">

            <div className="text-6xl mb-6">🎤</div>

            <h2 className="text-3xl font-bold text-cyan-700 mb-4">
              Voice Assistant
            </h2>

            <p className="text-gray-600 text-lg">
              Book appointments using Telugu, Hindi and English voice commands.
            </p>

          </div>

          {/* CARD 3 */}

          <div className="bg-green-50 p-10 rounded-3xl shadow-xl hover:scale-105 transition">

            <div className="text-6xl mb-6">💳</div>

            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Online Payments
            </h2>

            <p className="text-gray-600 text-lg">
              Secure online doctor consultation payments with receipts.
            </p>

          </div>

          {/* CARD 4 */}

          <div className="bg-purple-50 p-10 rounded-3xl shadow-xl hover:scale-105 transition">

            <div className="text-6xl mb-6">📄</div>

            <h2 className="text-3xl font-bold text-purple-700 mb-4">
              Medical Receipts
            </h2>

            <p className="text-gray-600 text-lg">
              Download professional medical receipts instantly as PDF.
            </p>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Home