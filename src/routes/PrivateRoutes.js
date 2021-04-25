import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../functions/functions"
import credentials from "../secretData/credentials.json"

const PrivateRoutes = ({ children, ...rest }) => {
    var CryptoJS = require("crypto-js");

    

    let auth = useAuth();

    
    let credential = JSON.parse(localStorage.getItem("credentials"))

    let key = "7x!A%D*G";
    

    if(credential===null){
      return(
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
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
      )
    }
    else{
      let decryptUsername = CryptoJS.AES.decrypt(credential.criptUser, key);
      let decryptPassword = CryptoJS.AES.decrypt(credential.criptPass, key);
        
      let fullydecriptedUsername = decryptUsername.toString(CryptoJS.enc.Utf8);
      let fullydecriptedPassword = decryptPassword.toString(CryptoJS.enc.Utf8);
      
      const localStorageValidation = () => {
        if(credential && fullydecriptedUsername === credentials.username && fullydecriptedPassword === credentials.password){
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
}
export default PrivateRoutes;
