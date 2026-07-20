import { useState } from "react";
import {
  FaAmbulance,
  FaHospital,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserMd,
} from "react-icons/fa";

const EmergencySOS = () => {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        alert("Location Retrieved Successfully!");
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  const callAmbulance = () => {
    window.location.href = "tel:108";
  };

  const callDoctor = () => {
    window.location.href = "tel:+919876543210";
  };

  const callEmergencyContact = () => {
    window.location.href = "tel:+919999999999";
  };

  const openGoogleMaps = () => {
    if (!location) {
      alert("Please fetch your location first.");
      return;
    }

    window.open(
      `https://www.google.com/maps?q=${location.latitude},${location.longitude}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 p-10">

      <h1 className="text-5xl font-bold text-center text-red-600 mb-10">
        🚨 Emergency SOS
      </h1>

      <p className="text-center text-gray-600 text-lg mb-12">
        Immediate emergency assistance when you need it the most.
      </p>

      {/* SOS Button */}

      <div className="flex justify-center mb-14">

        <button
          onClick={callAmbulance}
          className="w-52 h-52 rounded-full bg-red-600 hover:bg-red-700 text-white text-5xl font-bold shadow-2xl animate-pulse transition"
        >
          SOS
        </button>

      </div>

      {/* Emergency Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

          <FaAmbulance className="text-red-600 text-6xl mx-auto mb-5" />

          <h2 className="text-2xl font-bold mb-3">
            Ambulance
          </h2>

          <button
            onClick={callAmbulance}
            className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700"
          >
            Call 108
          </button>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

          <FaUserMd className="text-blue-600 text-6xl mx-auto mb-5" />

          <h2 className="text-2xl font-bold mb-3">
            Doctor
          </h2>

          <button
            onClick={callDoctor}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            Call Doctor
          </button>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

          <FaPhoneAlt className="text-green-600 text-6xl mx-auto mb-5" />

          <h2 className="text-2xl font-bold mb-3">
            Emergency Contact
          </h2>

          <button
            onClick={callEmergencyContact}
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
          >
            Call Contact
          </button>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

          <FaMapMarkerAlt className="text-orange-600 text-6xl mx-auto mb-5" />

          <h2 className="text-2xl font-bold mb-3">
            My Location
          </h2>

          <button
            onClick={getLocation}
            className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600"
          >
            Get Location
          </button>

        </div>

      </div>

      {/* Location */}

      {location && (

        <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold text-red-600 mb-5">
            📍 Current Location
          </h2>

          <p className="text-lg">
            Latitude : {location.latitude}
          </p>

          <p className="text-lg mb-6">
            Longitude : {location.longitude}
          </p>

          <button
            onClick={openGoogleMaps}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
          >
            Open in Google Maps
          </button>

        </div>

      )}

      {/* Nearby Hospitals */}

      <div className="mt-16">

        <h2 className="text-4xl font-bold text-center text-red-600 mb-10">
          Nearby Hospitals
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              name: "Apollo Hospital",
              distance: "2.1 KM",
            },
            {
              name: "KIMS Hospital",
              distance: "3.5 KM",
            },
            {
              name: "Care Hospital",
              distance: "5.2 KM",
            },
          ].map((hospital, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 text-center"
            >

              <FaHospital className="text-red-500 text-5xl mx-auto mb-5" />

              <h3 className="text-2xl font-bold">
                {hospital.name}
              </h3>

              <p className="text-gray-600 mt-3">
                {hospital.distance}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default EmergencySOS;