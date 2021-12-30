import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';

export default function UserNameSectionVersion1({ setVersionOne }) {
    const { blogName } = useParams();
    const theme = useContext(ThemeContext)[0];
    return (
        <div className="email" id="section" data-testid="email">
            <div className="sub-section-left" data-testid="sub-section-left">
                <h3>Blog name</h3>
            </div>
            <div className="sub-section-right" data-testid="sub-section-right">
                <p className="email" data-testid="email">
                    {blogName}
                </p>
                <button
                    className="edit"
                    data-testid="edit"
                    onClick={() => setVersionOne(false)}
                >
                    <svg
                        viewBox="0 0 17.6 17.6"
                        width="16"
                        height="16"
                        fill={`rgb(${themes[theme].accent})`}
                    >
                        <path d="M5.3 13.8l-2.1.7.7-2.1L10.3 6l1.4 1.4-6.4 6.4zm6.4-9.3l-1.4-1.4-1.4 1.4-6.7 6.7-.2.5-2 5.9 3.8-1.3 2.1-.7.4-.1.3-.3 7.8-7.8c.1 0-2.7-2.9-2.7-2.9zm5.6-1.4L14.5.3c-.4-.4-1-.4-1.4 0l-1.4 1.4L15.9 6l1.4-1.4c.4-.5.4-1.1 0-1.5"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}
UserNameSectionVersion1.propTypes = {
    setVersionOne: PropTypes.func.isRequired,
    sectionName: PropTypes.string.isRequired
};
