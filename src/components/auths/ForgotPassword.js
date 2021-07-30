import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "contexts/AuthContext"



export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="w-full max-w-sm bg-gray-300 p-8 rounded-lg shadow-xl">

        <h2 className="text-center mb-12">Password Reset</h2>
        {error && <span variant="text-red-600">{error}</span>}
        {message && <span variant="text-green-600">{message}</span>}


        <form onSubmit={handleSubmit}>
          <div id="email" className="flex flex-wrap mb-8">
            {/*<label className="w-full mb-2">Email</label>*/}
            <input type="email" ref={emailRef} placeholder="Email" required className="w-full border-2 border-gray-400 hover:border-gray-500 focus:border-blue-400 p-2 rounded-lg shadow-lg"/>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-blue-400 hover:bg-blue-300 focus:bg-blue-500 p-2 rounded-lg shadow-lg mb-12">
            Reset Password
          </button>
        </form>


        <hr className="border-t-2 border-gray-400 mb-8"/>


        <div className="w-full text-center mb-2">
          Need an account? <Link to="/signup" className="text-gray-600 hover:text-blue-400 focus:text-blue-600">Sign Up</Link>
        </div>

        <div className="w-full text-center">
          Already have an account? <Link to="/login" className="text-gray-600 hover:text-blue-400 focus:text-blue-600">Log In</Link>
        </div>

      </div>    
    </>
  )
}
