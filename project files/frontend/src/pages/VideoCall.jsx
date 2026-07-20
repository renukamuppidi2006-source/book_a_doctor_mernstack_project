const VideoCall = () => {

  return (

    <div className="min-h-screen bg-blue-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center">

        <h1 className="text-5xl font-bold text-blue-700 mb-10">
          Video Consultation
        </h1>

        <iframe
          src="https://meet.jit.si/BookADoctorMeeting"
          width="800"
          height="500"
          allow="camera; microphone; fullscreen"
          className="rounded-2xl"
        ></iframe>

      </div>

    </div>

  )
}

export default VideoCall