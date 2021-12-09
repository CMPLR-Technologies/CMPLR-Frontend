import React from 'react';
import AuthBtn from '../../../partials/AuthBtn';
export default function DeleteSection() {
    return (
        <div className="delete" id="section" style={{ borderBottom: 'none' }}>
            <AuthBtn
                dataTestid="cancel-btn"
                id="delete-account"
                text="Delete account"
            ></AuthBtn>
        </div>
    );
}
