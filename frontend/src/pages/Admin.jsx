import { useState } from "react"

const Admin = () => {

  const [doctors, setDoctors] = useState([

    {
      name: "Dr Ram",
      specialty: "Cardiologist"
    },

    {
      name: "Dr Priya",
      specialty: "Dermatologist"
    }

  ])

  const [name, setName] = useState("")
  const [specialty, setSpecialty] = useState("")

  const addDoctor = () => {

    if(!name || !specialty){

      alert("Fill All Fields")

      return

    }

    const newDoctor = {

      name,
      specialty

    }

    setDoctors([...doctors, newDoctor])

    setName("")
    setSpecialty("")

  }

  const deleteDoctor = (index) => {

    const updatedDoctors = doctors.filter(
      (_, i) => i !== index
    )

    setDoctors(updatedDoctors)

  }

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-center text-blue-900 mb-10">
        Admin Panel
      </h1>

      {/* Form */}

      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto">

        <h2 className="text-3xl font-bold mb-6 text-black">
          Add Doctor
        </h2>

        <input
          type="text"
          placeholder="Doctor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-2 border-gray-300 p-4 rounded-xl mb-5 text-black"
        />

        <input
          type="text"
          placeholder="Specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="w-full border-2 border-gray-300 p-4 rounded-xl mb-5 text-black"
        />

        <button
          onClick={addDoctor}
          className="bg-blue-600 text-white px-8 py-4 rounded-xl text-xl"
        >
          Add Doctor
        </button>

      </div>

      {/* Doctors List */}

      <div className="grid md:grid-cols-3 gap-8 mt-14">

        {
          doctors.map((doctor, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-xl"
            >

              <h2 className="text-3xl font-bold text-black">
                {doctor.name}
              </h2>

              <p className="mt-3 text-gray-700 text-lg">
                {doctor.specialty}
              </p>

              <button
                onClick={() => deleteDoctor(index)}
                className="mt-6 bg-red-500 text-white px-6 py-3 rounded-xl"
              >
                Delete
              </button>

            </div>

          ))
        }

      </div>

    </div>

  )

}

export default Admin