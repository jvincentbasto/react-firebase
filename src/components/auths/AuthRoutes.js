import { Route } from "react-router-dom"

import PrivateRoute from "components/auths/PrivateRoute"
import UpdateProfile from "components/auths/UpdateProfile"

import Login from "components/auths/Login"
import Signup from "components/auths/Signup"
import ForgotPassword from "components/auths/ForgotPassword"



export default function AuthRoutes() {
  return (
    <>
      <PrivateRoute path="/update-profile" component={UpdateProfile} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgot-password" component={ForgotPassword} />
    </>
  )
}
