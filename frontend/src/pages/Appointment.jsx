import { useState } from "react"
import jsPDF from "jspdf"

const Appointment = () => {

  const [patientName, setPatientName] = useState("")
  const [doctorName, setDoctorName] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const handlePayment = () => {

    if (
      !patientName ||
      !doctorName ||
      !date ||
      !time
    ) {
      alert("Please fill all fields")
      return
    }

    const options = {

      key: "rzp_test_T9uwU9Ricik16Z",

      amount: 50000,

      currency: "INR",

      name: "Book A Doctor",

      description: "Doctor Appointment",

      handler: function (response) {

        const appointment = {

          patientName,

          doctorName,

          date,

          time,

          paymentId: response.razorpay_payment_id,

          amount: "₹500",

          status: "Confirmed"

        }

        const appointments =
          JSON.parse(
            localStorage.getItem("appointments")
          ) || []

        appointments.push(appointment)

        localStorage.setItem(
          "appointments",
          JSON.stringify(appointments)
        )

        const doc = new jsPDF()

        doc.setFontSize(24)

        doc.text("BOOK A DOCTOR", 60, 20)

        doc.setFontSize(16)

        doc.text("Medical Receipt", 70, 35)

        doc.text(`Patient : ${patientName}`,20,60)

        doc.text(`Doctor : ${doctorName}`,20,75)

        doc.text(`Date : ${date}`,20,90)

        doc.text(`Time : ${time}`,20,105)

        doc.text(`Amount : ₹500`,20,120)

        doc.text(
          `Payment ID : ${response.razorpay_payment_id}`,
          20,
          135
        )

        doc.text("Status : Confirmed",20,150)

        doc.save("Medical_Receipt.pdf")

        alert("Appointment Booked Successfully")

        setPatientName("")
        setDoctorName("")
        setDate("")
        setTime("")

      },

      prefill: {

        name: patientName

      },

      theme: {

        color: "#2563eb"

      }

    }
    if (!window.Razorpay) {
  alert("Razorpay SDK not loaded")
  return
}

    const razor = new window.Razorpay(options)

    razor.open()

  }
    return (

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-cyan-100 flex justify-center items-center p-6">

      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-2xl">

        <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
          Book Appointment
        </h1>

        <input
          type="text"
          placeholder="Enter Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="w-full border p-4 rounded-xl mb-5 text-xl"
        />

        <input
          type="text"
          placeholder="Enter Doctor Name"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          className="w-full border p-4 rounded-xl mb-5 text-xl"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-4 rounded-xl mb-5 text-xl"
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full border p-4 rounded-xl mb-8 text-xl"
        />

        <button
          onClick={handlePayment}
          className="w-full bg-green-600 hover:bg-green-700 text-white text-2xl font-bold py-5 rounded-2xl"
        >
          Pay ₹500 & Book Appointment
        </button>

      </div>

    </div>

  )

  }

export default Appointment