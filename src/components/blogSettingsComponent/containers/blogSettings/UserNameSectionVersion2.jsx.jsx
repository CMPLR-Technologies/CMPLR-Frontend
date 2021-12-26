import React, { useContext, useState } from 'react';
import { updateEmailInDb } from '../../Service';
import AuthInput from '../../../partials/AuthInput';
import AuthBtn from '../../../partials/AuthBtn';
import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
import PropTypes from 'prop-types';
export default function UserNameSectionVersion2({
    setVersionOne,
    sectionName
}) {
    const { blogName, updateProperty } = useContext(BlogSettingsContext);
    const [newUserName, setNewUserName] = useState(blogName);
    const [errorMsg, setErrorMsg] = useState('');
    return (
        <div className="email" id="section">
            <div className="sub-section-left">
                <h3>{sectionName}</h3>
            </div>
            <div className="sub-section-right">
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
                ></AuthInput>

                {errorMsg.length !== 0 && (
                    <div id="update-email-error">
                        <p>{errorMsg}</p>
                    </div>
                )}
                <div className="update-email-btns">
                    <AuthBtn
                        text="Cancle"
                        color="#999999"
                        id="update-email-btn-cancel"
                        handleClick={() => setVersionOne(true)}
                    ></AuthBtn>
                    <AuthBtn
                        text="Save"
                        color="#00b8ff"
                        handleClick={() => {
                            // updateEmailInDb(
                            //     newUserName,
                            //     setErrorMsg,
                            //     updateProperty,
                            //     setVersionOne
                            //taaa
                            // );
                           
                        }}
                        id="update-email-btn-save"
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
