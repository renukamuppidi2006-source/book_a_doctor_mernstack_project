import React, { createContext, useState, useEffect } from 'react';
import axiosClient from '../api/axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [loadingDoctors, setLoadingDoctors] = useState(true);

  // Sync theme configurations
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Load list of all doctors
  const fetchDoctors = async () => {
    setLoadingDoctors(true);
    try {
      const { data } = await axiosClient.get('/doctors');
      if (data.success) {
        setDoctors(data.doctors);
      }
    } catch (error) {
      console.error('Failed fetching doctors catalog:', error.message);
    } finally {
      setLoadingDoctors(false);
    }
  };

  // Load appointments booked by current user (patient)
  const fetchUserAppointments = async () => {
    try {
      const { data } = await axiosClient.get('/appointments/my-appointments');
      if (data.success) {
        setAppointments(data.appointments);
      }
    } catch (error) {
      console.error('Failed fetching appointments:', error.message);
    }
  };

  // Load appointments scheduled for current doctor
  const fetchDoctorAppointments = async () => {
    try {
      const { data } = await axiosClient.get('/appointments/doctor-appointments');
      if (data.success) {
        return data.appointments;
      }
    } catch (error) {
      console.error('Failed fetching doctor logs:', error.message);
      return [];
    }
  };

  // Request a booking
  const bookNewAppointment = async (docId, slotDate, slotTime) => {
    try {
      const { data } = await axiosClient.post('/appointments/book', { docId, slotDate, slotTime });
      if (data.success) {
        fetchDoctors();
        fetchUserAppointments();
        return { success: true, message: data.message };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to book slot',
      };
    }
  };

  // Cancel an appointment
  const cancelUserAppointment = async (appointmentId) => {
    try {
      const { data } = await axiosClient.post('/appointments/cancel', { appointmentId });
      if (data.success) {
        fetchDoctors();
        fetchUserAppointments();
        return { success: true, message: data.message };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Cancellation request failed',
      };
    }
  };

  // Pay consulting fees
  const payForAppointment = async (appointmentId) => {
    try {
      const { data } = await axiosClient.post('/appointments/pay', { appointmentId });
      if (data.success) {
        fetchUserAppointments();
        return { success: true, message: data.message };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Payment processing failed',
      };
    }
  };

  // Complete consultation (Doctor action)
  const completeDoctorAppointment = async (appointmentId) => {
    try {
      const { data } = await axiosClient.post('/appointments/complete', { appointmentId });
      if (data.success) {
        return { success: true, message: data.message };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Could not complete appointment',
      };
    }
  };

  // Toggle logged-in doctor's availability
  const toggleDocAvailability = async () => {
    try {
      const { data } = await axiosClient.put('/doctors/toggle-availability');
      if (data.success) {
        fetchDoctors();
        return { success: true, available: data.available };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Could not update status',
      };
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <AppContext.Provider
      value={{
        doctors,
        appointments,
        theme,
        loadingDoctors,
        toggleTheme,
        fetchDoctors,
        fetchUserAppointments,
        fetchDoctorAppointments,
        bookNewAppointment,
        cancelUserAppointment,
        payForAppointment,
        completeDoctorAppointment,
        toggleDocAvailability,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
