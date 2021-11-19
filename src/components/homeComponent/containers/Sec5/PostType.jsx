import React from 'react';
import PropTypes from 'prop-types';

PostType.propTypes = {
    SVG: PropTypes.element.isRequired,
    secondRow: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    dataTestid: PropTypes
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
