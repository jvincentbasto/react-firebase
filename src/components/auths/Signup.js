import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "contexts/AuthContext"



export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()


  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }


    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }


    setLoading(false)
  }


  return (
    <>
      <div className="w-full max-w-sm bg-gray-300 p-8 rounded-lg shadow-xl">

        <h2 className="text-center mb-12">Sign Up</h2>
        {error && <span variant="text-red-600">{error}</span>}


        <form onSubmit={handleSubmit}>
          <div id="email" className="flex flex-wrap mb-4">
            {/*<label className="w-full mb-2">Email</label>*/}
            <input type="email" ref={emailRef} placeholder="Email" required className="w-full border-2 border-gray-400 hover:border-gray-500 focus:border-blue-400 p-2 rounded-lg shadow-lg"/>
          </div>
          <div id="password" className="flex flex-wrap mb-4">
            {/*<label className="w-full mb-2">Password</label>*/}
            <input type="password" ref={passwordRef} placeholder="Password" required className="w-full border-2 border-gray-400 hover:border-gray-500 focus:border-blue-400 p-2 rounded-lg shadow-lg"/>
          </div>
          <div id="password-confirm" className="flex flex-wrap mb-8">
            {/*<label className="w-full mb-2">Password Confirmation</label>*/}
            <input type="password" ref={passwordConfirmRef} placeholder="Password Confirmation" required className="w-full border-2 border-gray-400 hover:border-gray-500 focus:border-blue-400 p-2 rounded-lg shadow-lg"/>
          </div>


          <button type="submit" disabled={loading} className="w-full bg-blue-400 hover:bg-blue-300 focus:bg-blue-500 p-2 rounded-lg shadow-lg mb-12">
            Sign Up
          </button>
        </form>


        <hr className="border-t-2 border-gray-400 mb-8"/>


        <div className="w-full text-center mb-2">
          <Link to="/forgot-password" className="text-gray-600 hover:text-blue-400 focus:text-blue-600">Forgot Password?</Link>
        </div>

        <div className="w-full text-center">
          Already have an account? <Link to="/login" className="text-gray-600 hover:text-blue-400 focus:text-blue-600">Log In</Link>
        </div>

      </div>
    </>
  )
}
