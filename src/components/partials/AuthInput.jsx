import React from 'react'

const AuthInput = ({ name, type, placeholder }) => {
    return (
        <input className="AuthInput"
            type={type}
            name={name}
            placeholder={placeholder} />
    );
}

export default AuthInput;