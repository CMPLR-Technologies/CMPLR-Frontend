import React from 'react'

const AuthInput = ({ name, type, placeholder,value,setValue }) => {
    return (
        <input onChange={(e)=>setValue(e.target.value)} className="AuthInput" value={value}
            type={type}
            name={name}
            placeholder={placeholder} />
    );
}

export default AuthInput;