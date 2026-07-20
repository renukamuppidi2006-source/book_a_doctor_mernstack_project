import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceBot = () => {

  const [open, setOpen] = useState(false);

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>

      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 z-50
        w-16 h-16 rounded-full
        bg-gradient-to-r from-cyan-500 to-blue-600
        text-3xl
        shadow-[0_0_30px_rgba(6,182,212,0.7)]
        hover:scale-110
        transition duration-300"
      >
        🤖
      </button>

      {/* Popup */}

      {open && (

        <div
          className="fixed bottom-28 right-8
          w-80
          bg-[#111827]/95
          backdrop-blur-xl
          rounded-3xl
          border border-cyan-500
          shadow-2xl
          p-6
          z-50"
        >

          <h2 className="text-white text-xl font-bold mb-4">
            🤖 AI Voice Assistant
          </h2>

          <p className="text-cyan-400 mb-4">

            {listening
              ? "🎤 Listening..."
              : "🎤 Click Start"}

          </p>

          <div className="flex gap-3">

            <button
              onClick={SpeechRecognition.startListening}
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl"
            >
              Start
            </button>

            <button
              onClick={SpeechRecognition.stopListening}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl"
            >
              Stop
            </button>

          </div>

          <div className="mt-5">

            <p className="text-gray-400 text-sm">
              Command
            </p>

            <div className="bg-slate-800 rounded-xl mt-2 p-3 text-white min-h-[60px]">
              {transcript || "Say: Open Dashboard"}
            </div>

          </div>

        </div>

      )}

    </>

  );

};

export default VoiceBot;