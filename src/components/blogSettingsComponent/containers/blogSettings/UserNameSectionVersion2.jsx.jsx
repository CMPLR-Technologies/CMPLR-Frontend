import React, { useContext, useState } from 'react';
import { updatePropertyInDb } from '../../Service';
import AuthInput from '../../../partials/AuthInput';
import AuthBtn from '../../../partials/AuthBtn';
import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
export default function UserNameSectionVersion2({ setVersionOne }) {
    const { blogName } = useParams();
    const { updateProperty } = useContext(BlogSettingsContext);
    const [newUserName, setNewUserName] = useState(blogName);
    const [errorMsg, setErrorMsg] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));
    const theme = useContext(ThemeContext)[0];
    const navigate = useNavigate();

    return (
        <div className="email" id="section" data-testid="emailts">
            <div className="sub-section-left" data-testid="sub-section-left">
                <h3>Username</h3>
            </div>
            <div className="sub-section-right" data-testid="sub-section-right">
                <AuthInput
                    name="email"
                    type="text"
                    placeholder={
                        newUserName !== '' ? newUserName : ' New Blog Name'
                    }
                    className="text-field"
                    value={newUserName}
                    setValue={setNewUserName}
                    id="update-email-email"
                    data-testid="update-email-email"
                ></AuthInput>

                {errorMsg.length !== 0 && (
                    <div id="update-email-error">
                        <p>{errorMsg}</p>
                    </div>
                )}
                <div className="update-email-btns">
                    <AuthBtn
                        text="Cancle"
                        id="update-email-btn-cancel"
                        handleClick={() => setVersionOne(true)}
                        data-testid="update-email-btn-cancel"
                        color={`rgb(${themes[theme].accent})`}
                    ></AuthBtn>
                    <AuthBtn
                        text="Save"
                        color={`rgb(${themes[theme].black})`}
                        handleClick={() => {
                            updatePropertyInDb(
                                user?.token,
                                blogName,
                                updateProperty,
                                'blogName',
                                newUserName,
                                setVersionOne,
                                navigate
                            );
                        }}
                        id="update-email-btn-save"
                        data-testid="update-email-btn-save"
                    ></AuthBtn>
                </div>
            </div>
        </div>
    );
}
UserNameSectionVersion2.propTypes = {
    setVersionOne: PropTypes.func.isRequired,
    sectionName: PropTypes.string.isRequired
};
