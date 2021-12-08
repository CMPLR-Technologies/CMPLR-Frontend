import React from 'react';
import PropTypes from 'prop-types';

Tags.propTypes = {
    tagsArray: PropTypes.array
};

export default function Tags(props) {
    const { tagsArray } = props;
    return (
        <div className="tags">
            {tagsArray &&
                tagsArray.map((tag, index) => (
                    <a key={index} className="tag" href="/tagged">
                        {`#${tag}`}
                    </a>
                ))}
        </div>
    );
}
