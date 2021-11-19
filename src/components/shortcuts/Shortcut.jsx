import '../../styles/styles.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function Shortcut(props) {
    const { name, keys } = props.data;
    return (
        <div className="shortcut">
            <div className="shortcut-name">{name}</div>
            <div className="shortcut-key-container">
                {keys.map((key, index) => {
                    return (
                        <span key={index}>
                            {Boolean(index) && <span>&nbsp;+&nbsp;</span>}
                            <span className="shortcut-key">{key}</span>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

Shortcut.propTypes = {
    data: PropTypes.object.isRequired
};
