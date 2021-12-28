import React from 'react';
import propTypes from 'prop-types';

Badge.propTypes = {
    num: propTypes.number
};

export default function Badge(props) {
    const { num } = props;
    return <div className="badge">{num}</div>;
}
