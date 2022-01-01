import React, { useContext, useState } from 'react';
import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
import { updatePropertyInDb } from '../../Service';
import { useParams } from 'react-router-dom';
import AuthInput from '../../../partials/AuthInput';
import AuthBtn from '../../../partials/AuthBtn';
import { useEffect } from 'react';
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';
export default function AllowAskSection() {
    const { updateProperty, allowAsk, askPageTitle, allowAnonymousQuestion } =
        useContext(BlogSettingsContext);
    const user = JSON.parse(localStorage.getItem('user'));
    const { blogName } = useParams();
    const [askPage, setAskPage] = useState('');
    useEffect(() => {
        setAskPage(askPageTitle);
    }, [askPageTitle]);
    const theme = useContext(ThemeContext)[0];
    return (
        <div className="security" id="section" data-testid="section">
            <div className="sub-section-left" data-testid="sub-section-left">
                <h3>Ask</h3>
            </div>
            <div className="sub-section-right" data-testid="sub-section-right">
                <div
                    className="sub-section-right-up"
                    data-testid="sub-section-right-up"
                >
                    <div className="switch-div" data-testid="switch-div">
                        <label className="switch" data-testid="switch">
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
                                data-testid="switch-input-ts"
                            ></input>
                            <span
                                className="slider round"
                                data-testid="slider"
                            ></span>
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
                        <div
                            className="sub-section-right-up"
                            data-testid="sub-section-right-up"
                        >
                            <div
                                className="sub-section-right-up-allowAsk"
                                data-testid="sub-section-right-up-allowAsk"
                            >
                                <label
                                    className="Ask-page-title-label"
                                    htmlFor="sub-section-right-up-allowAsk"
                                    data-testid="Ask-page-title-label"
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
                                    data-testid="update-ask-title"
                                ></AuthInput>
                                <div
                                    className="update-ask-title-btns"
                                    data-testid="update-ask-title-btns"
                                >
                                    <AuthBtn
                                        text="Save"
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
                                        data-testid="update-ask-title-btn-save"
                                        color={`rgb(${themes[theme].black})`}
                                    ></AuthBtn>
                                </div>
                            </div>
                        </div>
                        {/* <div
                            className="sub-section-right-up"
                            data-testid="sub-section-right-up"
                        >
                            <div
                                className="switch-div"
                                data-testid="switch-div"
                            >
                                <label className="switch" data-testid="switch">
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
                                        data-testid="switch-input"
                                    ></input>
                                    <span
                                        className="slider round"
                                        data-testid="slider"
                                    ></span>
                                </label>
                            </div>
                            <div className="text">
                                <p className="bold-text">
                                    Allow anonymous questions
                                </p>
                            </div>
                        </div> */}
                    </>
                )}
            </div>
        </div>
    );
}
