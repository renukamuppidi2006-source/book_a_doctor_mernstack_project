import Doctor from "../models/Doctor.js"

export const addDoctor = async (req, res) => {

  try {

    const doctor = await Doctor.create(req.body)

    res.status(201).json({
      success: true,
      doctor
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

}

export const getDoctors = async (req, res) => {

  try {

    const doctors = await Doctor.find()

    res.status(200).json({
      success: true,
      doctors
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

}