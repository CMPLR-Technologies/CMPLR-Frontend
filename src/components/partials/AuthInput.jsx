import React from 'react';
import PropTypes from 'prop-types';

export default function AuthInput(props) {
    const {
        name,
        type,
        placeholder,
        value,
        setValue,
        id,
        readonly,
        dataTestid
    } = props;

    return (
        <input
            onChange={e => setValue(e.target.value)}
            className="AuthInput"
            value={value}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            readOnly={readonly}
            data-testid={dataTestid}
        />
    );
}

AuthInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes,
    setValue: PropTypes.func.isRequired,
    id: PropTypes.string,
    readonly: PropTypes.bool,
    dataTestid: PropTypes.string
};
