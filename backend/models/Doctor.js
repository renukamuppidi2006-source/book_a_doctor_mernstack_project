import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  specialty: {
    type: String,
    required: true
  },

  experience: {
    type: Number,
    default: 0
  },

  fees: {
    type: Number,
    required: true
  }
})

const Doctor = mongoose.model("Doctor", doctorSchema)

export default Doctor