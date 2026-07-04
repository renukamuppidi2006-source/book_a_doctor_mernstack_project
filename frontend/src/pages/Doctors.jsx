import { useNavigate } from "react-router-dom"

const Doctors = () => {

  const navigate = useNavigate()

  const doctors = [

    {
      name: "Dr Ram",
      specialty: "Cardiologist",
      fees: 500,
      experience: "10 Years",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },

    {
      name: "Dr Priya",
      specialty: "Dermatologist",
      fees: 700,
      experience: "8 Years",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },

    {
      name: "Dr Kiran",
      specialty: "Neurologist",
      fees: 900,
      experience: "12 Years",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }

  ]

  return (

    <div className="min-h-screen bg-blue-50 p-10">

      <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
        Our Doctors
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {
          doctors.map((doctor, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >

              <img
                src={doctor.image}
                alt=""
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h2 className="text-4xl font-bold text-black mb-3">
                  {doctor.name}
                </h2>

                <p className="text-2xl text-gray-600 mb-4">
                  {doctor.specialty}
                </p>

                <p className="text-xl font-semibold mb-3">
                  Experience: {doctor.experience}
                </p>

                <p className="text-green-600 text-2xl font-bold mb-4">
                  Available Today
                </p>

                <p className="text-blue-700 text-4xl font-bold mb-6">
                  ₹ {doctor.fees}
                </p>

                <button
                  onClick={() => navigate("/appointment")}
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl text-2xl font-bold hover:bg-blue-700"
                >
                  Book Appointment
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  )
}

export default Doctors