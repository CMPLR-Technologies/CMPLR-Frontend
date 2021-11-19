<<<<<<< HEAD
import React from 'react';
import LoginCard from './containers/LoginCard';
import AuthFooter from '../partials/AuthFooter';
import { getRandomImage } from './Controller';

export default function LoginView() {
    const b = getRandomImage();
    return (
        <div className="LoginView" style={{ backgroundImage: `url(${b})` }}>
            <LoginCard></LoginCard>
            <AuthFooter></AuthFooter>
        </div>
    );
}
=======
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
>>>>>>> dfc0b2d987957ac7f06ac4b32fc4165362c6ff24
