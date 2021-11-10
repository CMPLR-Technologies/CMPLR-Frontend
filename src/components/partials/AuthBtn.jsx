import React from "react";

const AuthBtn = ({ text, color, link = '/', logo = null}) => {
    return ( 
        <a href={ link } className="AuthBtn" 
            style={{backgroundColor: color, color: "black"}}>
            { logo && <img width="23" 
                           height="24"
                           src={logo} 
                           alt="logo" 
                           style={{marginRight: "3px",paddingRight: "5px"}}/>}
            { text }
        </a>
     );
}
 
export default AuthBtn;