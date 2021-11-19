import React from "react";
import LoginCard from "./containers/LoginCard";
import AuthFooter from "../partials/AuthFooter";

const LoginView = () => {
    return ( 
        <div className="LoginView">
            <LoginCard></LoginCard>
            <AuthFooter></AuthFooter>
        </div>
     );
}
 
export default LoginView;