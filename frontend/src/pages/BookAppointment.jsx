import React, { useState } from "react"

const BookAppointment = () => {

  const [name, setName] = useState("")
  const [doctor, setDoctor] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const handleBooking = () => {

    if (!name || !doctor || !date || !time) {
      alert("Please Fill All Fields")
      return
    }

    alert("Appointment Booked Successfully")
  }

  return (

    <div className="min-h-screen bg-white flex justify-center items-center">

      <div className="bg-gray-100 p-10 rounded-2xl shadow-2xl w-[500px]">

        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          Book Appointment
        </h1>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ color: "black", backgroundColor: "white" }}
          className="w-full border-2 border-gray-400 p-4 rounded-lg mb-5 placeholder-gray-500"
        />

        <input
          type="text"
          placeholder="Doctor Name"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          style={{ color: "black", backgroundColor: "white" }}
          className="w-full border-2 border-gray-400 p-4 rounded-lg mb-5 placeholder-gray-500"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ color: "black", backgroundColor: "white" }}
          className="w-full border-2 border-gray-400 p-4 rounded-lg mb-5"
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={{ color: "black", backgroundColor: "white" }}
          className="w-full border-2 border-gray-400 p-4 rounded-lg mb-5"
        />

        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-blue-700"
        >
          Confirm Booking
        </button>

      </div>

    </div>

  )
}

export default BookAppointment