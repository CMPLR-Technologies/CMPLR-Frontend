import React from 'react';
import AuthInput from '../../../../components/partials/AuthInput';
import PropsTypes from 'prop-types';

export default function UrlSection({ url, setUrl }) {
    return (
        <div className="security" id="section-create-blog">
            <div className="sub-section-left-create-blog">
                <h3 className="sub-section-left-text">Blog Title</h3>
            </div>
            <div className="sub-section-right-create-blog">
                <AuthInput
                    id="url-create-blog"
                    name="name"
                    type="text"
                    placeholder={url}
                    className="text-field"
                    value={url}
                    setValue={setUrl}
                ></AuthInput>
                <p className="text">(you can change this at any time)</p>
            </div>
        </div>
    );
}
UrlSection.propTypes = {
    url: PropsTypes.string.isRequired,
    setUrl: PropsTypes.func.isRequired
};
