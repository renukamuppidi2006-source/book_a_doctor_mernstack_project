import { useNavigate } from "react-router-dom"

const Dashboard = () => {

  const navigate = useNavigate()

  return (

    <div className="min-h-screen bg-blue-50 p-10">

      <h1 className="text-6xl font-bold text-center text-blue-700 mb-16">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        <div
          onClick={() => navigate("/doctors")}
          className="bg-white p-16 rounded-3xl shadow-xl text-center cursor-pointer"
        >
          <h1 className="text-5xl mb-5">👨‍⚕️</h1>

          <h2 className="text-4xl font-bold text-blue-700">
            Doctors
          </h2>
        </div>

        <div
          onClick={() => navigate("/myappointments")}
          className="bg-white p-16 rounded-3xl shadow-xl text-center cursor-pointer"
        >
          <h1 className="text-5xl mb-5">📅</h1>

          <h2 className="text-4xl font-bold text-green-700">
            My Appointments
          </h2>
        </div>

        <div
          onClick={() => navigate("/settings")}
          className="bg-white p-16 rounded-3xl shadow-xl text-center cursor-pointer"
        >
          <h1 className="text-5xl mb-5">⚙️</h1>

          <h2 className="text-4xl font-bold text-purple-700">
            Settings
          </h2>
        </div>

      </div>

    </div>

  )
}

export default Dashboard