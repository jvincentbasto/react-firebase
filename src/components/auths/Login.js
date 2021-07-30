import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "contexts/AuthContext"



export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, currentUser } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()


  async function handleSubmit(e) {
    e.preventDefault()


    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")

      console.log('change', currentUser);
    } catch(err) {
      setError("Failed to log in")
      console.log('error',err)
    }


    setLoading(false)
  }


  return (
    <>
      <div className="w-full max-w-sm bg-gray-300 p-8 rounded-lg shadow-xl">
        
        <h2 className="text-center mb-12">Log In</h2>
        {error && <span variant="text-red-600">{error}</span>}


        <form onSubmit={handleSubmit}>
          <div id="email" className="flex flex-wrap mb-4">
            {/*<label className="w-full mb-2">Email</label>*/}
            <input type="email" ref={emailRef} placeholder="Email" required className="w-full border-2 border-gray-400 hover:border-gray-500 focus:border-blue-400 p-2 rounded-lg shadow-lg"/>
          </div>
          <div id="password" className="flex flex-wrap mb-8">
            {/*<label className="w-full mb-2">Password</label>*/}
            <input type="password" ref={passwordRef} placeholder="Password" required className="w-full border-2 border-gray-400 hover:border-gray-500 focus:border-blue-400 p-2 rounded-lg shadow-lg"/>
          </div>


          <button type="submit" disabled={loading} className="w-full bg-blue-400 hover:bg-blue-300 focus:bg-blue-500 p-2 rounded-lg shadow-lg mb-12">
            Log In
          </button>
        </form>

        <hr className="border-t-2 border-gray-400 mb-8"/>

        <div className="w-full text-center mb-2">
          <Link to="/forgot-password" className="text-gray-600 hover:text-blue-400 focus:text-blue-600">Forgot Password?</Link>
        </div>

        <div className="w-full text-center">
          Need an account? <Link to="/signup" className="text-gray-600 hover:text-blue-400 focus:text-blue-600">Sign Up</Link>
        </div>

      </div>
    </>
  )
}
