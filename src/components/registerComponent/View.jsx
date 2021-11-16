import React,{useState} from "react";
import '../../styles/styles.css';
import AuthFooter from '../partials/AuthFooter';
import RegisterCard from './containers/RegisterCard';



export default function Register(){
    const logo_url = "https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20210618182605%21Google_%22G%22_Logo.svg"
    return (
        <div className="LoginView">
            <RegisterCard/>
            <AuthFooter/>
        </div>
    );
}

