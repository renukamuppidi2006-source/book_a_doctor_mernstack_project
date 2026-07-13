import { Link } from "react-router-dom"

const Navbar = () => {

  const enableDarkMode = () => {

    document.body.classList.toggle("dark-mode")

  }

  return (

    <div className="flex justify-between items-center px-10 py-5 bg-blue-600">

      <h1 className="text-4xl font-bold text-white">
        Book A Doctor
      </h1>

      <div className="flex gap-8 items-center">

        <Link
          to="/"
          className="text-white text-xl font-bold"
        >
          Home
        </Link>

        <Link
          to="/login"
          className="text-white text-xl font-bold"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="text-white text-xl font-bold"
        >
          Register
        </Link>

        <Link
          to="/dashboard"
          className="text-white text-xl font-bold"
        >
          Dashboard
        </Link>

        <button

          onClick={enableDarkMode}

          className="bg-black text-white px-5 py-2 rounded-xl"
        >

          🌙 Dark

        </button>

      </div>

    </div>

  )
}

export default Navbar