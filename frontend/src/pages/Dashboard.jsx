import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Dashboard = () => {

  const navigate = useNavigate();

  return (

    <div className="flex bg-[#020617] min-h-screen">

      {/* Sidebar */}

      <Sidebar />

      {/* Main */}

      <div className="flex-1 ml-72 p-8">

        {/* Topbar */}

        <Topbar />

        {/* Dashboard Heading */}

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-white">
            Healthcare Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Welcome back! Here's today's hospital overview.
          </p>

        </div>

        {/* KPI CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          <div className="rounded-3xl p-6 bg-gradient-to-r from-cyan-500 to-blue-700 shadow-2xl">

            <p className="text-white/80">
              Doctors
            </p>

            <h1 className="text-5xl text-white font-bold mt-4">
              100+
            </h1>

            <p className="text-white/70 mt-4">
              Active Specialists
            </p>

          </div>

          <div className="rounded-3xl p-6 bg-gradient-to-r from-green-500 to-emerald-700 shadow-2xl">

            <p className="text-white/80">
              Appointments
            </p>

            <h1 className="text-5xl text-white font-bold mt-4">
              520
            </h1>

            <p className="text-white/70 mt-4">
              This Month
            </p>

          </div>

          <div className="rounded-3xl p-6 bg-gradient-to-r from-pink-500 to-red-600 shadow-2xl">

            <p className="text-white/80">
              Patients
            </p>

            <h1 className="text-5xl text-white font-bold mt-4">
              50K+
            </h1>

            <p className="text-white/70 mt-4">
              Registered Patients
            </p>

          </div>

          <div className="rounded-3xl p-6 bg-gradient-to-r from-purple-600 to-indigo-700 shadow-2xl">

            <p className="text-white/80">
              Revenue
            </p>

            <h1 className="text-5xl text-white font-bold mt-4">
              ₹12L
            </h1>

            <p className="text-white/70 mt-4">
              Monthly Revenue
            </p>

          </div>

        </div>

        {/* Emergency Banner */}

        <div className="bg-gradient-to-r from-red-900 via-red-700 to-red-900 rounded-3xl p-8 flex justify-between items-center shadow-xl mb-10">

          <div>

            <h1 className="text-5xl text-white font-bold">

              🚑 Emergency SOS

            </h1>

            <p className="text-red-100 mt-4 text-lg">

              Need urgent medical help? Contact emergency services immediately.

            </p>

          </div>

          <button

            onClick={() => navigate("/emergency")}

            className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold hover:bg-red-600 hover:text-white transition"

          >

            Open SOS

          </button>

        </div>

                {/* FEATURE CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* Doctors */}

          <div
            onClick={() => navigate("/doctors")}
            className="bg-[#111827] border border-slate-700 rounded-3xl p-8 cursor-pointer hover:border-cyan-500 hover:-translate-y-2 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300"
          >

            <div className="text-6xl">👨‍⚕️</div>

            <h2 className="text-3xl font-bold text-cyan-400 mt-6">
              Doctors
            </h2>

            <p className="text-gray-400 mt-3 text-lg">
              Find experienced doctors from multiple specialties.
            </p>

          </div>

          {/* Appointments */}

          <div
            onClick={() => navigate("/myappointments")}
            className="bg-[#111827] border border-slate-700 rounded-3xl p-8 cursor-pointer hover:border-green-500 hover:-translate-y-2 hover:shadow-green-500/20 hover:shadow-2xl transition-all duration-300"
          >

            <div className="text-6xl">📅</div>

            <h2 className="text-3xl font-bold text-green-400 mt-6">
              Appointments
            </h2>

            <p className="text-gray-400 mt-3 text-lg">
              Book, manage and track appointments easily.
            </p>

          </div>

          {/* Payments */}

          <div
            onClick={() => navigate("/appointment")}
            className="bg-[#111827] border border-slate-700 rounded-3xl p-8 cursor-pointer hover:border-yellow-500 hover:-translate-y-2 hover:shadow-yellow-500/20 hover:shadow-2xl transition-all duration-300"
          >

            <div className="text-6xl">💳</div>

            <h2 className="text-3xl font-bold text-yellow-400 mt-6">
              Payments
            </h2>

            <p className="text-gray-400 mt-3 text-lg">
              Secure online consultation payments.
            </p>

          </div>

          {/* Reports */}

          <div
            onClick={() => navigate("/reports")}
            className="bg-[#111827] border border-slate-700 rounded-3xl p-8 cursor-pointer hover:border-purple-500 hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-2xl transition-all duration-300"
          >

            <div className="text-6xl">📄</div>

            <h2 className="text-3xl font-bold text-purple-400 mt-6">
              Medical Reports
            </h2>

            <p className="text-gray-400 mt-3 text-lg">
              Download prescriptions and medical reports.
            </p>

          </div>

          {/* AI */}

          <div
            onClick={() => navigate("/chatbot")}
            className="bg-[#111827] border border-slate-700 rounded-3xl p-8 cursor-pointer hover:border-pink-500 hover:-translate-y-2 hover:shadow-pink-500/20 hover:shadow-2xl transition-all duration-300"
          >

            <div className="text-6xl">🤖</div>

            <h2 className="text-3xl font-bold text-pink-400 mt-6">
              AI Assistant
            </h2>

            <p className="text-gray-400 mt-3 text-lg">
              Get instant medical guidance using AI.
            </p>

          </div>

          {/* Video */}

          <div
            onClick={() => navigate("/videocall")}
            className="bg-[#111827] border border-slate-700 rounded-3xl p-8 cursor-pointer hover:border-red-500 hover:-translate-y-2 hover:shadow-red-500/20 hover:shadow-2xl transition-all duration-300"
          >

            <div className="text-6xl">🎥</div>

            <h2 className="text-3xl font-bold text-red-400 mt-6">
              Video Consultation
            </h2>

            <p className="text-gray-400 mt-3 text-lg">
              Consult doctors securely through video calls.
            </p>

          </div>

        </div>

                {/* RECENT APPOINTMENTS */}

        <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8 mt-12 shadow-2xl">

          <div className="flex justify-between items-center mb-8">

            <h1 className="text-3xl font-bold text-white">
              Recent Appointments
            </h1>

            <button
              onClick={() => navigate("/myappointments")}
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-white font-semibold"
            >
              View All
            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b border-slate-700 text-gray-400">

                  <th className="text-left py-4">Patient</th>

                  <th className="text-left">Doctor</th>

                  <th className="text-left">Date</th>

                  <th className="text-left">Time</th>

                  <th className="text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-slate-800 hover:bg-slate-800">

                  <td className="py-5 text-white">Renuka</td>

                  <td className="text-gray-300">Dr Rajesh</td>

                  <td className="text-gray-300">15 Jul 2026</td>

                  <td className="text-gray-300">10:30 AM</td>

                  <td>

                    <span className="bg-green-500 px-4 py-2 rounded-full text-white text-sm">
                      Confirmed
                    </span>

                  </td>

                </tr>

                <tr className="border-b border-slate-800 hover:bg-slate-800">

                  <td className="py-5 text-white">Rahul</td>

                  <td className="text-gray-300">Dr Priya</td>

                  <td className="text-gray-300">16 Jul 2026</td>

                  <td className="text-gray-300">11:00 AM</td>

                  <td>

                    <span className="bg-yellow-500 px-4 py-2 rounded-full text-white text-sm">
                      Pending
                    </span>

                  </td>

                </tr>

                <tr className="hover:bg-slate-800">

                  <td className="py-5 text-white">Anjali</td>

                  <td className="text-gray-300">Dr Kumar</td>

                  <td className="text-gray-300">17 Jul 2026</td>

                  <td className="text-gray-300">2:00 PM</td>

                  <td>

                    <span className="bg-blue-500 px-4 py-2 rounded-full text-white text-sm">
                      Completed
                    </span>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* HOSPITAL PERFORMANCE */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

          <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8">

            <h2 className="text-3xl text-white font-bold mb-8">
              Hospital Performance
            </h2>

            <div className="space-y-8">

              <div>

                <div className="flex justify-between text-white mb-2">

                  <span>Patient Satisfaction</span>

                  <span>98%</span>

                </div>

                <div className="bg-slate-700 rounded-full h-4">

                  <div className="bg-green-500 h-4 rounded-full w-[98%]"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between text-white mb-2">

                  <span>Appointment Success</span>

                  <span>95%</span>

                </div>

                <div className="bg-slate-700 rounded-full h-4">

                  <div className="bg-cyan-500 h-4 rounded-full w-[95%]"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between text-white mb-2">

                  <span>AI Assistant Usage</span>

                  <span>88%</span>

                </div>

                <div className="bg-slate-700 rounded-full h-4">

                  <div className="bg-pink-500 h-4 rounded-full w-[88%]"></div>

                </div>

              </div>

            </div>

          </div>

          {/* QUICK ACTIONS */}

          <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-white mb-8">
              Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-6">

              <button
                onClick={() => navigate("/appointment")}
                className="bg-cyan-500 hover:bg-cyan-600 rounded-2xl p-6 text-white text-xl font-bold"
              >
                📅
                <br />
                Book
              </button>

              <button
                onClick={() => navigate("/doctors")}
                className="bg-green-500 hover:bg-green-600 rounded-2xl p-6 text-white text-xl font-bold"
              >
                👨‍⚕️
                <br />
                Doctors
              </button>

              <button
                onClick={() => navigate("/reports")}
                className="bg-purple-500 hover:bg-purple-600 rounded-2xl p-6 text-white text-xl font-bold"
              >
                📄
                <br />
                Reports
              </button>

              <button
                onClick={() => navigate("/emergency")}
                className="bg-red-500 hover:bg-red-600 rounded-2xl p-6 text-white text-xl font-bold"
              >
                🚑
                <br />
                SOS
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Dashboard;