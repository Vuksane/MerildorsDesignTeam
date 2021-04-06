import React from 'react'
import { Route, Redirect } from "react-router-dom";

export const PrivateRoutes = ({ isAuth: isAuth, component: Component, ...rest}) => {
    console.log(isAuth,"is privatne rute")
    return (
        <Route 
            {...rest}
            render={props =>{
                if (isAuth){
                    return <Component {...props} />;
                }
                else{
                    return (<Redirect to={{ pathname: "/Adminpanellogin", state: {from: props.location} }} />
                    );
                }             
            }}
        />
    )
}

export default PrivateRoutes;