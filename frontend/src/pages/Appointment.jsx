import { useState } from "react"

const Appointment = () => {

  const [patientName, setPatientName] = useState("")
  const [doctorName, setDoctorName] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const handleBooking = () => {
    alert("Appointment Booked Successfully")
  }

  return (

    <div className="min-h-screen bg-blue-50 flex justify-center items-center">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[450px]">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Book Appointment
        </h1>

        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="w-full border border-gray-300 p-4 rounded-xl mb-5 text-black"
        />

        <input
          type="text"
          placeholder="Doctor Name"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          className="w-full border border-gray-300 p-4 rounded-xl mb-5 text-black"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 p-4 rounded-xl mb-5 text-black"
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full border border-gray-300 p-4 rounded-xl mb-5 text-black"
        />

        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 text-white py-4 rounded-xl text-xl font-bold hover:bg-blue-700"
        >
          Confirm Booking
        </button>

      </div>

    </div>

  )
}

export default Appointment