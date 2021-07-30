import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { AuthProvider } from "contexts/AuthContext"


import PrivateRoute from "components/auths/PrivateRoute"
import AuthRoutes from "components/auths/AuthRoutes"
import Homepage from "pages/homepage/Homepage"



export default function App() {

  return (
    <>
      <AuthProvider>
        <div className="max-w-full w-auto mx-auto h-auto min-h-screen bg-gray-50">
          
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Homepage} />
              <AuthRoutes />
            </Switch>
          </Router>

        </div>
      </AuthProvider>
    </>
  );
}