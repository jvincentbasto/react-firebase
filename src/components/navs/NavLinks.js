import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "contexts/AuthContext"



export default function NavLinks() {
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")
    console.log(error)

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }



  return (
  	<>
    	<Link to="/update-profile" className="text-gray-600 hover:text-blue-400 focus:text-blue-600 px-2">Update Profile</Link>
      <button className="text-gray-600 hover:text-blue-400 focus:text-blue-600 px-2" onClick={handleLogout}>
        Log Out
      </button>
  	</>		      
  );
};
