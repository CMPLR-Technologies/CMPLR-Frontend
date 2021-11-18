import React from 'react';
import PropTypes from 'prop-types';

export default function AuthInput(props) {
    const { name, type, placeholder, value, setValue } = props;
    return (
        <input
            onChange={e => {
                setValue(e.target.value);
            }}
            className="AuthInput"
            value={value}
            type={type}
            name={name}
            placeholder={placeholder}
        />
    );
}

AuthInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes,
    value: PropTypes,
    setValue: PropTypes.func.isRequired
};
