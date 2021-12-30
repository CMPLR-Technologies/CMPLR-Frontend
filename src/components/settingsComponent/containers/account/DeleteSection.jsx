import React from 'react';
import AuthBtn from '../../../partials/AuthBtn';
import { useNavigate } from 'react-router-dom';
import PropsTypes from 'prop-types';
export default function DeleteSection({ blogName }) {
    const history = useNavigate();
    return (
        <div className="delete" id="section" style={{ borderBottom: 'none' }}>
            <AuthBtn
                dataTestid="cancel-btn"
                id="delete-account"
                text="Delete account"
                handleClick={() => {
                    history(`/account/delete/${blogName}`);
                }}
            ></AuthBtn>
        </div>
    );
}
DeleteSection.propTypes = {
    blogName: PropsTypes.string.isRequired
};
