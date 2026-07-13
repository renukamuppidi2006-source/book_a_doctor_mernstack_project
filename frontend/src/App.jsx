import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Doctors from "./pages/Doctors"
import Appointment from "./pages/Appointment"
import MyAppointments from "./pages/MyAppointments"
import Settings from "./pages/Settings"
import ChatBot from "./pages/ChatBot"
import VideoCall from "./pages/VideoCall"

import VoiceBot from "./components/VoiceBot"

import { Toaster } from "react-hot-toast"
import MedicalReports from "./pages/MedicalReports"

import EmergencySOS from "./pages/EmergencySOS"

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/doctors" element={<Doctors />} />

        <Route path="/appointment" element={<Appointment />} />

        <Route
          path="/myappointments"
          element={<MyAppointments />}
        />

        <Route path="/settings" element={<Settings />} />

        <Route path="/chatbot" element={<ChatBot />} />

        <Route path="/videocall" element={<VideoCall />} />

        <Route path="/reports" element={<MedicalReports />} />

        <Route path="/emergency" element={<EmergencySOS />} />

      </Routes>

      <VoiceBot />

      <Toaster />

    </BrowserRouter>

  )
}

export default App