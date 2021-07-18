import React from 'react';
//import GetFirebase from './GetFirebase';
//import SnapshotFirebase from './SnapshotFirebase';
// import { AuthProvider } from './auth/Auth';
// import Login from './auth/Login';
// import Welcome from './Welcome';
// import SnapshotFirebaseAdvanced from './SnapshotFirebaseAdvanced';


import { AuthProvider } from "contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Signup from "components/Signup"
import Dashboard from "components/Dashboard"
import Login from "components/Login"
import PrivateRoute from "components/PrivateRoute"
import ForgotPassword from "components/ForgotPassword"
import UpdateProfile from "components/UpdateProfile"


function App() {
  //const get = false;

  return (
    <>
      {/*<AuthProvider>*/}
        {/*<Welcome />*/}
        {/*<Login />*/}
        {/* {get ? <GetFirebase /> : <SnapshotFirebase />} */}
        {/*<SnapshotFirebaseAdvanced />*/}
      {/*</AuthProvider>*/}

      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;

//DOCS: https://firebase.google.com/docs/firestore/
