import React from 'react';
import PropTypes from 'prop-types';

export default function AuthBtn(props) {
    const { text, color, logo = null, handleClick, id, dataTestid } = props;

    return (
        <a
            onClick={handleClick}
            className="AuthBtn "
            style={{ backgroundColor: color, color: 'black' }}
            id={id}
            data-testid={dataTestid}
        >
            {logo && (
                <img
                    width="23"
                    height="24"
                    src={logo}
                    alt="logo"
                    style={{ marginRight: '3px', paddingRight: '5px' }}
                />
            )}
            {text}
        </a>
    );
}

AuthBtn.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    logo: PropTypes,
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.string,
    dataTestid: PropTypes.string
};
