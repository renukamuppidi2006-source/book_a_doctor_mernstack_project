import { useEffect, useState } from "react"

const MyAppointments = () => {

  const [appointments, setAppointments] = useState([])

  useEffect(() => {

    const savedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || []

    setAppointments(savedAppointments)

  }, [])

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-cyan-100 p-10">

      <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
        My Appointments
      </h1>

      {

        appointments.length === 0 ?

        (

          <div className="text-center mt-20">

            <h2 className="text-3xl font-bold text-gray-500">
              No Appointments Found
            </h2>

          </div>

        )

        :

        (

          <div className="grid gap-8 max-w-5xl mx-auto">

            {

              appointments.map((item, index) => (

                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-xl p-8"
                >

                  <h2 className="text-3xl font-bold text-blue-700 mb-5">
                    {item.doctorName}
                  </h2>

                  <p className="text-xl mb-3">
                    👤 Patient :
                    <b> {item.patientName}</b>
                  </p>

                  <p className="text-xl mb-3">
                    📅 Date :
                    <b> {item.date}</b>
                  </p>

                  <p className="text-xl mb-3">
                    ⏰ Time :
                    <b> {item.time}</b>
                  </p>

                  <p className="text-xl mb-3">
                    💰 Amount :
                    <b> {item.amount}</b>
                  </p>

                  <p className="text-lg break-all mb-4">
                    💳 Payment ID :
                    <b> {item.paymentId}</b>
                  </p>

                  <span className="bg-green-600 text-white px-5 py-2 rounded-full font-bold">
                    {item.status}
                  </span>

                </div>

              ))

            }

          </div>

        )

      }

    </div>

  )

}

export default MyAppointments