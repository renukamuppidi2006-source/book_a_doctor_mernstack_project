import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import VoiceBot from "./components/VoiceBot";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import MyAppointments from "./pages/MyAppointments";
import Settings from "./pages/Settings";
import ChatBot from "./pages/ChatBot";
import VideoCall from "./pages/VideoCall";
import MedicalReports from "./pages/MedicalReports";
import EmergencySOS from "./pages/EmergencySOS";

import { Toaster } from "react-hot-toast";

function Layout() {

  const location = useLocation();

  const dashboardPages = [
    "/dashboard",
    "/doctors",
    "/appointment",
    "/myappointments",
    "/settings",
    "/chatbot",
    "/videocall",
    "/reports",
    "/emergency"
  ];

  const showNavbar = !dashboardPages.includes(location.pathname);

  return (
    <>

      {showNavbar && <Navbar />}

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/doctors" element={<Doctors />} />

        <Route path="/appointment" element={<Appointment />} />

        <Route path="/myappointments" element={<MyAppointments />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/chatbot" element={<ChatBot />} />

        <Route path="/videocall" element={<VideoCall />} />

        <Route path="/reports" element={<MedicalReports />} />

        <Route path="/emergency" element={<EmergencySOS />} />

      </Routes>

      <VoiceBot />

      <Toaster />

    </>
  );
}

function App() {

  return (

    <BrowserRouter>

      <Layout />

    </BrowserRouter>

  );

}

export default App;