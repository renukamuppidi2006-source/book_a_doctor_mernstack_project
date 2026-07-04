const MyAppointments = () => {

  const appointments = [

    {
      doctor: "Dr Ram",
      date: "05 July 2026",
      time: "10:00 AM"
    },

    {
      doctor: "Dr Priya",
      date: "06 July 2026",
      time: "2:30 PM"
    }

  ]

  return (

    <div className="min-h-screen bg-blue-50 p-10">

      <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
        My Appointments
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">

        {
          appointments.map((item, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-xl"
            >

              <h2 className="text-3xl font-bold text-black mb-3">
                {item.doctor}
              </h2>

              <p className="text-xl text-gray-700 mb-2">
                Date: {item.date}
              </p>

              <p className="text-xl text-gray-700">
                Time: {item.time}
              </p>

            </div>

          ))
        }

      </div>

    </div>

  )
}

export default MyAppointments