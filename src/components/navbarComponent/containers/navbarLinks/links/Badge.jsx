import React from 'react';
import propTypes from 'prop-types';

Badge.propTypes = {
    num: propTypes.number
};
/**
 * Badge: Badge is a box contain a number of unread messages
 * @function Badge
 * @description Badge is a box contain a number of unread messages
 * @returns {Component} Badge is a box contain a number of unread messages
 */
export default function Badge(props) {
    const { num } = props;
    return <div className="badge">{num}</div>;
}
