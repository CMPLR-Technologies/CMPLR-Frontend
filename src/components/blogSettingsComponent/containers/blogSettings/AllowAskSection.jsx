import React, { useContext, useState } from 'react';
import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
import { updatePropertyInDb } from '../../Service';
import { useParams } from 'react-router-dom';
import AuthInput from '../../../partials/AuthInput';
import AuthBtn from '../../../partials/AuthBtn';
import { useEffect } from 'react';
export default function AllowAskSection() {
    const { updateProperty, allowAsk, askPageTitle, allowAnonymousQuestion } =
        useContext(BlogSettingsContext);
    const user = JSON.parse(localStorage.getItem('user'));
    const { blogName } = useParams();
    console.log(askPageTitle);
    const [askPage, setAskPage] = useState('');
    useEffect(() => {
        setAskPage(askPageTitle);
    }, [askPageTitle]);
    return (
        <div className="security" id="section">
            <div className="sub-section-left">
                <h3>Ask</h3>
            </div>
            <div className="sub-section-right">
                <div className="sub-section-right-up">
                    <div className="switch-div">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={allowAsk}
                                onChange={() => {
                                    updatePropertyInDb(
                                        user?.token,
                                        blogName,
                                        updateProperty,
                                        'allowAsk',
                                        !allowAsk
                                    );
                                }}
                            ></input>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="text">
                        <p className="bold-text">Let people ask questions</p>
                        <p className="un-bold-text">
                            Send your audience to /ask to ask you questions. Ask
                            page title
                        </p>
                    </div>
                </div>
                {allowAsk && (
                    <>
                        <div className="sub-section-right-up">
                            <div className="sub-section-right-up-allowAsk">
                                <label
                                    className="Ask-page-title-label"
                                    htmlFor="sub-section-right-up-allowAsk"
                                >
                                    Ask page title
                                </label>
                                <AuthInput
                                    name="email"
                                    type="text"
                                    placeholder={
                                        askPage !== ''
                                            ? askPage
                                            : 'Your ask page title'
                                    }
                                    className="text-field"
                                    value={askPage}
                                    setValue={setAskPage}
                                    id="update-ask-title"
                                ></AuthInput>
                                <div className="update-ask-title-btns">
                                    <AuthBtn
                                        text="Save"
                                        color="#00b8ff"
                                        handleClick={() => {
                                            updatePropertyInDb(
                                                user?.token,
                                                blogName,
                                                updateProperty,
                                                'askPageTitle',
                                                askPage
                                            );
                                        }}
                                        id="update-ask-title-btn-save"
                                    ></AuthBtn>
                                </div>
                            </div>
                        </div>
                        <div className="sub-section-right-up">
                            <div className="switch-div">
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={allowAnonymousQuestion}
                                        onChange={() => {
                                            updatePropertyInDb(
                                                user?.token,
                                                blogName,
                                                updateProperty,
                                                'allowAnonymousQuestion',
                                                !allowAnonymousQuestion
                                            );
                                        }}
                                    ></input>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="text">
                                <p className="bold-text">
                                    Allow anonymous questions
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
