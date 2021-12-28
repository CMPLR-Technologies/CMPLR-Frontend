import React from 'react';
import AuthInput from '../../../../components/partials/AuthInput';
import PropsTypes from 'prop-types';
export default function passwordSection({
    checkBox,
    setCheckBox,
    password,
    setPassword
}) {
    return (
        <div className="security" id="section-create-blog">
            <div className="sub-section-left-create-blog">
                <h3 className="sub-section-left-text">password</h3>
            </div>
            <div className="sub-section-right-create-blog">
                <AuthInput
                    id="privacy-create-blog"
                    name="password"
                    type="password"
                    placeholder={password}
                    className="text-field"
                    value={password}
                    setValue={setPassword}
                    onFocus={() => setCheckBox(true)}
                ></AuthInput>
                <div className="text text-and-checkbox">
                    <input
                        type="checkbox"
                        name="check-password"
                        id="check-password"
                        checked={checkBox}
                        onChange={() => {
                            if (!checkBox) {
                                document
                                    .getElementById('privacy-create-blog')
                                    .focus();
                                document
                                    .getElementById('privacy-create-blog')
                                    .select();
                            }
                            setCheckBox(!checkBox);
                        }}
                    />
                    <label htmlFor="check-password">
                        This blog can only be viewed by people who enter this
                        password:
                    </label>
                </div>
            </div>
        </div>
    );
}
passwordSection.propTypes = {
    checkBox: PropsTypes.bool.isRequired,
    setCheckBox: PropsTypes.func.isRequired,
    password: PropsTypes.string.isRequired,
    setPassword: PropsTypes.func.isRequired
};
