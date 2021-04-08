import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import {useAuth} from "../functions/functions"

function AuthButton() {
    let history = useHistory();
    let auth = useAuth();
    let location = useLocation();
    const handleLogout = () => {
      localStorage.removeItem("credentials")
      auth.signout(() => history.push("/Adminpanellogin"));
    }
    
    if (location.pathname.match(/Adminpanelindex/)){
      return auth.user ? (
        <div className="lover_left">
          <p>
            <Button onClick={()=>handleLogout()}>Sign out</Button>
          </p>
        </div>
      ) : (
        <div className="lover_left">
          <p>
            <Button onClick={()=>handleLogout()}>Sign out</Button>
          </p>
        </div>
      );
    }
    else return null;
}
export default AuthButton;