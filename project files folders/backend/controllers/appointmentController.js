import Appointment from "../models/Appointment.js"

export const createAppointment = async (req,res)=>{

    try{

        const appointment = await Appointment.create(req.body)

        res.status(201).json(appointment)

    }catch(err){

        res.status(500).json({message:err.message})

    }

}

export const getAppointments = async(req,res)=>{

    try{

        const appointments = await Appointment.find()

        res.json(appointments)

    }catch(err){

        res.status(500).json({message:err.message})

    }

}