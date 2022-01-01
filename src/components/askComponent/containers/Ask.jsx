import React, { useState } from 'react';
import { AskQuestion } from '../Service';
// import { BlogSettingsContext } from '../../../contexts/blogSettingsContext/BlogSettingsContext';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
export default function Ask() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [content, setContent] = useState('');
    // const { blogName: userBlogName } = useContext(BlogSettingsContext);
    const [response, setResponse] = useState(-1);
    const [isPendingAsk, setIsPendingAsk] = useState(false);
    const { blogName } = useParams();
    let firstMsg = [
        ' Thank you!',
        'Wrong target blog',
        'Target blog has been blocked',
        'Error in sending question'
    ];

    return (
        <>
            <div className="ask-div" data-testid="ask-div">
                <div className="ash-inner-div">
                    <div className="ask-title">
                        <h2
                            onClick={() => {
                                setResponse(-1);
                            }}
                            data-testid="ask-title"
                        >
                            Ask me anything
                        </h2>
                    </div>
                    <div className="body-text">
                        <div className="l-container">
                            {response === -1 ? (
                                <div className="ask-form">
                                    <div className="question-wrapper">
                                        <textarea
                                            className="textAreaWithoutStylingAsk"
                                            id="question"
                                            maxLength={500}
                                            onChange={e =>
                                                setContent(e?.target?.value)
                                            }
                                            data-testid="question"
                                        >
                                            {content}
                                        </textarea>
                                    </div>
                                    <div className="footer">
                                        <div id="user_info">
                                            <div className="avatar-name">
                                                <div className="avatar">
                                                    <img
                                                        src={
                                                            user?.userData
                                                                ?.avatar
                                                        }
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="sender">
                                                {user?.userData?.blog_name}
                                            </div>
                                            <div className="buttons-wrapper">
                                                <button
                                                    type="submit"
                                                    id="ask_button"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        setIsPendingAsk(true);

                                                        AskQuestion(
                                                            blogName,
                                                            content,
                                                            user.token
                                                        )
                                                            .then(res => {
                                                                setResponse(
                                                                    res
                                                                );
                                                                setIsPendingAsk(
                                                                    false
                                                                );
                                                                setContent('');
                                                            })
                                                            .catch(() => {});
                                                    }}
                                                    data-testid="ask_button"
                                                >
                                                    {isPendingAsk && (
                                                        <CircularProgress
                                                            style={{
                                                                width: '20px',
                                                                height: '20px',
                                                                color: 'white',
                                                                marginLeft:
                                                                    '2px',
                                                                cursor: 'wait'
                                                            }}
                                                        />
                                                    )}
                                                    Ask
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div
                                        className="message-part1"
                                        data-testid="message1"
                                    >
                                        {
                                            firstMsg[
                                                response >= 0 && response <= 3
                                                    ? response
                                                    : 0
                                            ]
                                        }
                                    </div>
                                    {response === 0 && (
                                        <div
                                            className="message-part2"
                                            data-testid="message2"
                                        >
                                            Your question has been received.
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
