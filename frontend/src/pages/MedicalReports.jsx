import { useState } from "react"
import toast from "react-hot-toast"

const MedicalReports = () => {

  const [file, setFile] = useState(null)

  const handleUpload = async () => {

    if (!file) {

      toast.error("Please select a file")

      return

    }

    const formData = new FormData()

    formData.append("report", file)

    try {

      const response = await fetch(
        "http://localhost:5000/api/upload",
        {
          method: "POST",
          body: formData,
        }
      )

      const data = await response.json()

      if (data.success) {

        toast.success("Medical Report Uploaded ✅")

      }

    } catch (error) {

      toast.error("Upload Failed ❌")

    }

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-cyan-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[600px]">

        <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
          Upload Medical Report
        </h1>

        <input

          type="file"

          onChange={(e) => setFile(e.target.files[0])}

          className="w-full border p-5 rounded-2xl text-xl mb-10"
        />

        <button

          onClick={handleUpload}

          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-2xl py-4 rounded-2xl font-bold"
        >

          Upload Report

        </button>

      </div>

    </div>

  )
}

export default MedicalReports