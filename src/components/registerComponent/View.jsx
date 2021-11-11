import React,{useState} from "react";
import {TextField,Paper,Grid} from '@mui/material';
import '../../styles/styles.css';
import TextInput from "./containers/TextInput";
import ButtonInput from "./containers/ButtonsInput";
import GoogleIcon from '@mui/icons-material/Google';


export default function Register(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [blogName,setBlogName]=useState("");

    const handleEmailChange=(e)=>{
        setEmail(e.target.value?e.target.value:"")
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value?e.target.value:"");
    }

    const handleBlogNameChange=(e)=>{
        setBlogName(e.target.value?e.target.value:"");
    }

    return <>
        <Grid justifyContent="center" alignItems="center" container spacing={3}>
        <Grid item md={3} s={6} xs={12}>
            <div className="centerContents">

                    <h1 className="titleHeader">tumblr</h1>
                    <TextInput handleFunc={handleEmailChange} val={email} title={"Email"}/>
                    <TextInput handleFunc={handlePasswordChange} val={password} title={"Password"}/>
                    <TextInput handleFunc={handleBlogNameChange} val={blogName} title={"Blog Name"}/>
                    <div className="registerTextInputDiv">
                    <p className="titleHeader">
                        By clicking "sign up", or continuing with the other options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy
                    </p>
                    </div>
                    <ButtonInput icon={null} title="Sign Up" btnStyle="signupbtn"/>
                    <ButtonInput icon={<GoogleIcon/>} title="Continue With Google" btnStyle="googlebtn"/>
            </div>
        </Grid>
    </Grid>
    </>
}

