import React from 'react';
import AuthBtn from '../../../partials/AuthBtn';
import { useNavigate } from 'react-router-dom';
export default function DeleteSection() {
    const history = useNavigate();
    return (
        <div className="delete" id="section" style={{ borderBottom: 'none' }}>
            <AuthBtn
                dataTestid="cancel-btn"
                id="delete-account"
                text="Delete account"
                handleClick={() => {
                    history('/account/delete');
                }}
            ></AuthBtn>
        </div>
    );
}
