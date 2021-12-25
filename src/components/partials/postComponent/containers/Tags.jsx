import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Tags.propTypes = {
    tagsArray: PropTypes.array
};

export default function Tags(props) {
    const { tagsArray } = props;
    return (
        <div data-testid="tags-cont-ts" className="tags">
            {tagsArray &&
                tagsArray.map((tag, index) => (
                    <Link
                        data-testid="tag-header-ts"
                        key={index}
                        className="tag"
                        to={`/tagged/${tag}`}
                    >
                        {`#${tag}`}
                    </Link>
                ))}
        </div>
    );
}
