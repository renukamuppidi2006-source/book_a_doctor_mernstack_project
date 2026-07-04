import Appointment from "../models/Appointment.js"

export const createAppointment = async (req, res) => {

  try {

    const appointment = await Appointment.create(req.body)

    res.status(201).json({
      success: true,
      message: "Appointment Booked",
      appointment
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

}

export const getAppointments = async (req, res) => {

  try {

    const appointments = await Appointment.find()

    res.json(appointments)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}