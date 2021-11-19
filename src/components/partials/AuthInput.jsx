import React from 'react';
import PropTypes from 'prop-types';

/**
 * @function AuthInput
 * @description Custom input field for sign up and login pages
 * @property { string } name - Name of the input field in html tag
 * @property { string } type - Type of the input field in html tag
 * @property { string } placeholder - Initial text on input field
 * @property { stateful_value } value - Internal state of the input field
 * @property { function } setValue - Setter for the internal state
 * @returns Input field with the given parameters
 */

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
