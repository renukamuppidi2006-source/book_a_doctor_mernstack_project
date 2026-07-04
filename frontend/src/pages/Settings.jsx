const Settings = () => {

  return (

    <div className="min-h-screen bg-blue-50 flex justify-center items-center">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[500px]">

        <h1 className="text-5xl font-bold text-center text-purple-700 mb-10">
          Settings
        </h1>

        <input
          type="text"
          placeholder="Change Name"
          className="w-full border p-4 rounded-xl text-2xl mb-5"
        />

        <input
          type="email"
          placeholder="Change Email"
          className="w-full border p-4 rounded-xl text-2xl mb-5"
        />

        <input
          type="password"
          placeholder="Change Password"
          className="w-full border p-4 rounded-xl text-2xl mb-8"
        />

        <button
          className="w-full bg-purple-600 text-white py-4 rounded-xl text-2xl font-bold"
        >
          Save Changes
        </button>

      </div>

    </div>

  )
}

export default Settings