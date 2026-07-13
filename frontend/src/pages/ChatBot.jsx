import { useState } from "react"

const ChatBot = () => {

  const [message, setMessage] = useState("")
  const [reply, setReply] = useState("")

  const handleAsk = async () => {

    if (message === "") {
      return
    }

    // SIMPLE AI RESPONSES

    if (message.includes("fever")) {
      setReply("Drink water and consult a doctor if fever continues.")
    }

    else if (message.includes("headache")) {
      setReply("Take rest and consult neurologist if pain is severe.")
    }

    else if (message.includes("cold")) {
      setReply("Take steam and drink warm fluids.")
    }

    else {
      setReply("Please consult a doctor for better guidance.")
    }

  }

  return (

    <div className="min-h-screen bg-blue-50 flex justify-center items-center">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[500px]">

        <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
          AI Medical Assistant
        </h1>

        <input
          type="text"
          placeholder="Ask your health question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border p-4 rounded-xl text-xl mb-5 text-black"
        />

        <button
          onClick={handleAsk}
          className="w-full bg-blue-600 text-white py-4 rounded-xl text-2xl font-bold"
        >
          Ask AI
        </button>

        <div className="bg-gray-100 p-5 rounded-xl mt-8">

          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            AI Reply:
          </h2>

          <p className="text-black text-lg">
            {reply}
          </p>

        </div>

      </div>

    </div>

  )
}

export default ChatBot