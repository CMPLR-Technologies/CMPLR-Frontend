import React from 'react';
import PropTypes from 'prop-types';

/**
 * @function PostTypeComponent
 * @description base component of post type Circled component
 * @param {SVG_Component} SVG - post type image in svg format
 * @param {bool} secondRow - boolean to detect if this component in the second row in display to apply margin
 * @param {string} dataTestid - test id used in unit testing
 * @returns {Component} circled component with specific post type
 */

PostType.propTypes = {
    SVG: PropTypes.element.isRequired,
    secondRow: PropTypes.bool,
    type: PropTypes.string.isRequired,
    dataTestid: PropTypes.string
};
export default function PostType(props) {
    const { SVG, secondRow, type, dataTestid } = props;
    return (
        <div
            data-testid={dataTestid}
            className={`post-type ${secondRow ? 'second-row' : ''}`}
        >
            <div className="post-type-circle">{SVG}</div>
            {type}
        </div>
    );
}
