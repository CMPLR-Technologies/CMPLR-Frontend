import React from 'react'

const LoginInput = ({ name, type, placeholder }) => {
    return (
        <input className="LoginInput"
            type={type}
            name={name}
            placeholder={placeholder} />
    );
}

export default LoginInput;