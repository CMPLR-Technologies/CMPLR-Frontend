import React, { useState } from 'react';
import AuthInput from '../../../../components/partials/AuthInput';
import PropsTypes from 'prop-types';

export default function TitleSection({ title, setTitle }) {
    return (
        <div className="security" id="section-create-blog">
            <div className="sub-section-left-create-blog">
                <h3 className="sub-section-left-text">Blog name</h3>
            </div>
            <div className="sub-section-right-create-blog">
                <AuthInput
                    id="title-create-blog"
                    name="name"
                    type="text"
                    placeholder={title}
                    className="text-field"
                    value={title}
                    setValue={setTitle}
                ></AuthInput>
                <p className="text">
                    (ie. Acme Corp, Sara & Jacob, My Awesome Blog)
                </p>
            </div>
        </div>
    );
}
TitleSection.propTypes = {
    title: PropsTypes.string.isRequired,
    setTitle: PropsTypes.func.isRequired
};
