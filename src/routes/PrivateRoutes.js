import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../functions/functions"
import credentials from "../secretData/credentials.json"

const PrivateRoutes = ({ children, ...rest }) => {
    let auth = useAuth();
    let credential = JSON.parse(localStorage.getItem("credentials"))
    const localStorageValidation = () => {
      if(credential && credential.username === credentials.username && credential.password === credentials.password){
        return true;
      }
      else{
        return false;
      }
    }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user || localStorageValidation() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/Adminpanellogin",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}
export default PrivateRoutes;
