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
        {/* STATISTICS */}

<div className="max-w-7xl mx-auto mt-24">

<h1 className="text-5xl font-bold text-center text-blue-700 mb-14">
Trusted By Thousands
</h1>

<div className="grid md:grid-cols-4 gap-8">

<div className="bg-blue-600 text-white rounded-3xl p-10 text-center shadow-xl">

<h1 className="text-5xl font-bold">100+</h1>

<p className="text-xl mt-4">Doctors</p>

</div>

<div className="bg-green-600 text-white rounded-3xl p-10 text-center shadow-xl">

<h1 className="text-5xl font-bold">50K+</h1>

<p className="text-xl mt-4">Patients</p>

</div>

<div className="bg-red-500 text-white rounded-3xl p-10 text-center shadow-xl">

<h1 className="text-5xl font-bold">24×7</h1>

<p className="text-xl mt-4">Emergency</p>

</div>

<div className="bg-purple-600 text-white rounded-3xl p-10 text-center shadow-xl">

<h1 className="text-5xl font-bold">15+</h1>

<p className="text-xl mt-4">Hospitals</p>

</div>

</div>

</div>

{/* TOP DOCTORS */}

<div className="max-w-7xl mx-auto py-24">

  <h1 className="text-6xl font-bold text-center text-blue-700 mb-16">
    Meet Our Top Doctors
  </h1>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

    <div className="bg-white rounded-3xl shadow-2xl p-8 text-center hover:-translate-y-2 transition">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
        className="w-32 mx-auto mb-6"
        alt=""
      />
      <h2 className="text-3xl font-bold text-blue-700">
        Dr. Rajesh
      </h2>
      <p className="text-gray-600 mt-2">
        Cardiologist
      </p>
      <p className="text-yellow-500 text-2xl mt-3">
        ⭐⭐⭐⭐⭐
      </p>

      <button
        onClick={() => navigate("/appointment")}
        className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
      >
        Book Now
      </button>

    </div>

    <div className="bg-white rounded-3xl shadow-2xl p-8 text-center hover:-translate-y-2 transition">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
        className="w-32 mx-auto mb-6"
        alt=""
      />
      <h2 className="text-3xl font-bold text-green-700">
        Dr. Priya
      </h2>
      <p className="text-gray-600 mt-2">
        Dermatologist
      </p>
      <p className="text-yellow-500 text-2xl mt-3">
        ⭐⭐⭐⭐⭐
      </p>

      <button
        onClick={() => navigate("/appointment")}
        className="mt-6 bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700"
      >
        Book Now
      </button>

    </div>

    <div className="bg-white rounded-3xl shadow-2xl p-8 text-center hover:-translate-y-2 transition">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
        className="w-32 mx-auto mb-6"
        alt=""
      />
      <h2 className="text-3xl font-bold text-red-600">
        Dr. Arjun
      </h2>
      <p className="text-gray-600 mt-2">
        Neurologist
      </p>
      <p className="text-yellow-500 text-2xl mt-3">
        ⭐⭐⭐⭐⭐
      </p>

      <button
        onClick={() => navigate("/appointment")}
        className="mt-6 bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700"
      >
        Book Now
      </button>

    </div>

    <div className="bg-white rounded-3xl shadow-2xl p-8 text-center hover:-translate-y-2 transition">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
        className="w-32 mx-auto mb-6"
        alt=""
      />
      <h2 className="text-3xl font-bold text-purple-700">
        Dr. Kavya
      </h2>
      <p className="text-gray-600 mt-2">
        Pediatrician
      </p>
      <p className="text-yellow-500 text-2xl mt-3">
        ⭐⭐⭐⭐⭐
      </p>

      <button
        onClick={() => navigate("/appointment")}
        className="mt-6 bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700"
      >
        Book Now
      </button>

    </div>

  </div>

</div>

{/* TESTIMONIALS */}

<div className="max-w-7xl mx-auto py-24">

  <h1 className="text-6xl font-bold text-center text-blue-700 mb-16">
    What Our Patients Say
  </h1>

  <div className="grid md:grid-cols-3 gap-10">

    <div className="bg-white rounded-3xl shadow-2xl p-8">

      <div className="text-yellow-500 text-3xl mb-4">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-gray-600 text-lg leading-8">
        Booking an appointment was very easy. The doctors are professional and the service is excellent.
      </p>

      <h2 className="text-2xl font-bold text-blue-700 mt-8">
        Renuka
      </h2>

    </div>

    <div className="bg-white rounded-3xl shadow-2xl p-8">

      <div className="text-yellow-500 text-3xl mb-4">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-gray-600 text-lg leading-8">
        Video consultation saved my time. The payment process was smooth and I received my receipt instantly.
      </p>

      <h2 className="text-2xl font-bold text-green-700 mt-8">
        Rahul
      </h2>

    </div>

    <div className="bg-white rounded-3xl shadow-2xl p-8">

      <div className="text-yellow-500 text-3xl mb-4">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-gray-600 text-lg leading-8">
        AI Assistant helped me choose the right doctor quickly. Highly recommended healthcare platform.
      </p>

      <h2 className="text-2xl font-bold text-purple-700 mt-8">
        Sneha
      </h2>

    </div>

  </div>

</div>

{/* EMERGENCY SOS */}

<div className="max-w-7xl mx-auto py-24">

  <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-[40px] p-12 shadow-2xl flex flex-col lg:flex-row justify-between items-center">

    <div>

      <h1 className="text-6xl font-extrabold text-white mb-6">
        🚑 Emergency SOS
      </h1>

      <p className="text-red-100 text-2xl max-w-2xl leading-relaxed">
        Need urgent medical help?
        Contact emergency services immediately and get connected to the nearest hospital.
      </p>

    </div>

    <div className="mt-10 lg:mt-0 flex gap-6">

      <button
        className="bg-white text-red-600 px-10 py-5 rounded-2xl text-2xl font-bold hover:scale-105 transition"
      >
        📞 Call 108
      </button>

      <button
        onClick={() => navigate("/emergency")}
        className="border-2 border-white text-white px-10 py-5 rounded-2xl text-2xl font-bold hover:bg-white hover:text-red-600 transition"
      >
        Open SOS
      </button>

    </div>

  </div>

</div>

{/* AI HEALTH ASSISTANT */}

<div className="max-w-7xl mx-auto py-24">

  <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-[40px] p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between">

    {/* LEFT */}

    <div className="text-white max-w-2xl">

      <h1 className="text-6xl font-extrabold mb-8">
        🤖 AI Health Assistant
      </h1>

      <p className="text-2xl text-blue-100 leading-relaxed mb-8">
        Describe your symptoms and get instant guidance.
        Our AI assistant helps you find the right doctor quickly.
      </p>

      <div className="grid grid-cols-2 gap-4">

        <button className="bg-white text-blue-700 px-6 py-4 rounded-2xl font-bold hover:scale-105 transition">
          🤒 Fever
        </button>

        <button className="bg-white text-blue-700 px-6 py-4 rounded-2xl font-bold hover:scale-105 transition">
          🤧 Cold
        </button>

        <button className="bg-white text-blue-700 px-6 py-4 rounded-2xl font-bold hover:scale-105 transition">
          ❤️ Heart
        </button>

        <button className="bg-white text-blue-700 px-6 py-4 rounded-2xl font-bold hover:scale-105 transition">
          🩺 Diabetes
        </button>

      </div>

      <button
        onClick={() => navigate("/chatbot")}
        className="mt-10 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl text-2xl font-bold transition"
      >
        Start AI Consultation →
      </button>

    </div>

    {/* RIGHT */}

    <div className="mt-12 lg:mt-0">

      <img
        src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
        alt="AI Assistant"
        className="w-[380px] animate-pulse"
      />

    </div>

  </div>

</div>
      </div>

    </div>

  )
}

export default Home