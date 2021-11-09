import React from "react";

const LoginBtn = ({ text, color, link = '/'}) => {
    return ( 
        <a href={ link } className="LoginBtn" style={{backgroundColor: color, color: "black"}}>{ text }</a>
     );
}
 
export default LoginBtn;