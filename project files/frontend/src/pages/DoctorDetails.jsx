import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const DoctorDetails = () => {

  const { id } = useParams()

  const doctors = [

    {
      id: 1,
      name: "Dr Ram",
      specialty: "Cardiologist",
      fees: 500,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      about: "Expert heart specialist with 10 years experience"
    },

    {
      id: 2,
      name: "Dr Priya",
      specialty: "Dermatologist",
      fees: 700,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      about: "Skin specialist and cosmetic expert"
    },

    {
      id: 3,
      name: "Dr Kiran",
      specialty: "Neurologist",
      fees: 900,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      about: "Brain and nerve specialist"
    }

  ]

  const doctor = doctors.find((doc) => doc.id == id)

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-3xl">

        <img
          src={doctor.image}
          alt=""
          className="w-60 h-60 object-cover rounded-full mx-auto"
        />

        <h1 className="text-4xl font-bold text-center mt-5">
          {doctor.name}
        </h1>

        <p className="text-center text-xl text-gray-600 mt-2">
          {doctor.specialty}
        </p>

        <p className="text-center mt-5 text-lg">
          {doctor.about}
        </p>

        <h2 className="text-center text-2xl font-bold mt-5">
          Consultation Fees: ₹ {doctor.fees}
        </h2>

        <div className="flex justify-center mt-8">
         <Link to="/appointment">
 
           <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl">
           Confirm Booking
          </button>

       </Link>

        </div>

      </div>

    </div>

  )

}

export default DoctorDetails