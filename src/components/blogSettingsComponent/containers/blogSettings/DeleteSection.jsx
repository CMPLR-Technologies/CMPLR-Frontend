import React, { useContext } from 'react';
import AuthBtn from '../../../partials/AuthBtn';
import { useNavigate } from 'react-router-dom';
import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
import propsTypes from 'prop-types';
export default function DeleteSection({ blogName }) {
    const history = useNavigate();
    const { blogId } = useContext(BlogSettingsContext);
    return (
        <div
            className="delete"
            id="section"
            data-testid="section"
            style={{ borderBottom: 'none' }}
        >
            <AuthBtn
                dataTestid="cancel-btn"
                id="delete-account"
                text="Delete account"
                handleClick={() => {
                    history(`/blog/${blogName}/delete/${blogId}`);
                }}
            ></AuthBtn>
        </div>
    );
}
DeleteSection.propTypes = {
    blogName: propsTypes.string.isRequired
};
