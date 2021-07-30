import React from 'react';
import { Link } from "react-router-dom"
import NavLinks from "components/navs/NavLinks"



export default function Navbar() {
    
  return (
  	<>
     <nav className="max-w-full w-auto mx-auto h-16 bg-gray-50 rounded-lg shadow-lg">
      <div className="container mx-auto h-full flex justify-between items-center">

       <Link to="/" className="h4 text-gray-600 hover:text-blue-400 focus:text-blue-600">EasyRecipe</Link>

       <div className="w-auto h-full flex justify-center items-center">
         <Link to="/" className="text-gray-600 hover:text-blue-400 focus:text-blue-600 px-2">Home</Link>
         <NavLinks />
       </div>

      </div>
     </nav> 
    </>    
  );
};