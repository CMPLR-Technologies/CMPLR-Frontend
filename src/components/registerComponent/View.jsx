import React,{useState} from "react";
import '../../styles/styles.css';
import LoginCard from "../loginComponent/containers/LoginCard";
import AuthBtn from '../partials/AuthBtn';
import AuthInput from '../partials/AuthInput';
import AuthFooter from '../partials/AuthFooter';
import OrBar from '../partials/OrBar';
import RegisterCard from './containers/RegisterCard';



export default function Register(){
    return (
        <div className="LoginView">
            <RegisterCard/>
            <AuthFooter/>
        </div>
    );
}

