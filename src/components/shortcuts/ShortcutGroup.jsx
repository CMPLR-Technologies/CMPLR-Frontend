import Shortcut from './Shortcut';
import React from 'react';
import '../../styles/styles.css';
import PropTypes from 'prop-types';

export default function ShortcutGroup(props) {
    const { name, list } = props.data;
    return (
        <div>
            <h2>{name}</h2>
            <div className="shortcut-group">
                {list.map((shortcut, index) => (
                    <Shortcut data={shortcut} key={index} />
                ))}
            </div>
        </div>
    );
}

ShortcutGroup.propTypes = {
    data: PropTypes.object.isRequired
};
