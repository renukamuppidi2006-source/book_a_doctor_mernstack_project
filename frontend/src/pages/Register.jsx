import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = (e) => {

    e.preventDefault()

    if(name && email && password){

      alert("Registration Successful")

      navigate("/login")

    }

  }

  return (

    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={handleRegister}
        className="bg-white p-10 rounded-2xl shadow-xl w-[400px]"
      >

        <h1 className="text-4xl font-bold mb-8 text-center text-black">
          Register
        </h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-4 rounded-lg mb-5 text-black"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-4 rounded-lg mb-5 text-black"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-4 rounded-lg mb-5 text-black"
        />

        <button className="w-full bg-blue-700 text-white py-4 rounded-xl text-xl">
          Register
        </button>

      </form>

    </div>

  )

}

export default Register