import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import {
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth"

import { auth } from "../firebase/auth"

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleSubmit(e) {
  e.preventDefault()

  setError("")
  setLoading(true)

  try {
   await createUserWithEmailAndPassword(
  auth,
  email,
  password
)

await signOut(auth)

navigate("/login")

  } catch (err) {
    setError(err.message)

  } finally {
    setLoading(false)
  }
}

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        {error && (
          <p className="text-red-500 mb-4 text-sm">
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border p-3 rounded-xl"
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border p-3 rounded-xl"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
          >
           {loading ? "Creating Account..." : "Register"}
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-indigo-600 font-medium"
          >
            Login
          </Link>
        </p>

      </div>
    </section>
  )
}

export default Register