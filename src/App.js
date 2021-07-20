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
        <div className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>

              <Router>
                <Switch>
                  <PrivateRoute exact path="/" component={Homepage} />
                  <AuthRoutes />
                </Switch>
              </Router>
          
          </div>
        </div>

      </AuthProvider>
    </>
  );
}