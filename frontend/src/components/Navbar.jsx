import { Link } from "react-router-dom"

const Navbar = () => {

  return (

    <div className="flex justify-between items-center px-10 py-5 bg-white shadow-md">

      <h1 className="text-4xl font-bold text-blue-700">
        Book A Doctor
      </h1>

      <div className="flex gap-8 text-2xl font-semibold">

        <Link to="/">Home</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

        <Link to="/dashboard">Dashboard</Link>

      </div>

    </div>

  )
}

export default Navbar