import React from "react";

import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

import { useNavigate } from "react-router-dom";

const VoiceBot = () => {

  const navigate = useNavigate();

  const commands = [

    {
      command: "open dashboard",
      callback: () => navigate("/dashboard"),
    },

    {
      command: "open doctors",
      callback: () => navigate("/doctors"),
    },

    {
      command: "open appointments",
      callback: () => navigate("/myappointments"),
    },

    {
      command: "open settings",
      callback: () => navigate("/settings"),
    },

    {
      command: "go home",
      callback: () => navigate("/"),
    },

  ];

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser not supported</span>;
  }

  return (

    <div className="fixed bottom-5 right-5 z-50">

      <button

        onClick={() => SpeechRecognition.startListening()}

        className="bg-blue-600 text-white px-6 py-4 rounded-full text-xl shadow-xl"
      >

        🎤 Start

      </button>

      <button

        onClick={() => SpeechRecognition.stopListening()}

        className="bg-red-500 text-white px-6 py-4 rounded-full text-xl ml-3 shadow-xl"
      >

        Stop

      </button>

      <div className="bg-white p-4 mt-3 rounded-2xl shadow-xl w-72">

        <h1 className="text-black text-xl font-bold">
          Listening: {listening ? "ON" : "OFF"}
        </h1>

        <p className="text-black mt-2">
          {transcript}
        </p>

      </div>

    </div>

  );
};

export default VoiceBot;