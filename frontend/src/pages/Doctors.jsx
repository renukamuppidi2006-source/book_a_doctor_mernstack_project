import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Doctors = () => {

  const navigate = useNavigate()

  const [search, setSearch] = useState("")

  const doctors = [

    {
      name: "Dr. Rajesh",
      specialization: "Cardiologist",
      experience: "10 Years",
      fee: "₹500",
      image:
        "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    },

    {
      name: "Dr. Priya",
      specialization: "Dermatologist",
      experience: "8 Years",
      fee: "₹700",
      image:
        "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    },

    {
      name: "Dr. Arjun",
      specialization: "Neurologist",
      experience: "12 Years",
      fee: "₹1000",
      image:
        "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    },

    {
      name: "Dr. Kavya",
      specialization: "Pediatrician",
      experience: "6 Years",
      fee: "₹400",
      image:
        "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    },

  ]

  const filteredDoctors = doctors.filter((doctor) =>

    doctor.name.toLowerCase().includes(search.toLowerCase()) ||

    doctor.specialization
      .toLowerCase()
      .includes(search.toLowerCase())

  )

  return (

    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-100 p-10">

      {/* Heading */}

      <h1 className="text-6xl font-extrabold text-center text-blue-700 mb-10">
        Our Doctors
      </h1>

      {/* Search Bar */}

      <div className="flex justify-center mb-12">

        <input
          type="text"
          placeholder="Search doctor or specialization..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-2xl p-5 rounded-2xl shadow-xl text-xl outline-none"
        />

      </div>

      {/* Doctors Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {filteredDoctors.map((doctor, index) => (

          <div

            key={index}

            className="bg-white rounded-3xl p-8 shadow-2xl hover:-translate-y-2 transition duration-300 text-center"
          >

            <img
              src={doctor.image}
              alt="doctor"
              className="w-32 mx-auto mb-6"
            />

            <h2 className="text-3xl font-bold text-blue-700 mb-3">
              {doctor.name}
            </h2>

            <p className="text-xl text-gray-600 mb-2">
              {doctor.specialization}
            </p>

            <p className="text-lg text-gray-500 mb-2">
              Experience: {doctor.experience}
            </p>

            <p className="text-lg text-gray-500 mb-6">
              Fee: {doctor.fee}
            </p>

            <button

              onClick={() => navigate("/appointment")}

              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-bold"
            >

              Book Appointment

            </button>

          </div>

        ))}

      </div>

    </div>

  )
}

export default Doctors