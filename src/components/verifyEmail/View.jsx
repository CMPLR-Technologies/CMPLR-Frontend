import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { resendEmailVerification } from './Service';
import { CircularProgress } from '@mui/material';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';

export default function VerifyEmail() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [display, setDisplay] = useState(
        !user?.userData?.email_verified_at ? true : false
    );
    const [isPending, setIsPending] = useState(false);
    const theme = useContext(ThemeContext)[0];

    const css = `
        .Te4Pg {
            color: rgb(${themes[theme]?.white});
            background-color: rgb(${themes[theme]?.accent});
        }
        .YEJRy {
            color: rgb(${themes[theme]?.white});
        }
        .bdzlZ {
            color: rgb(${themes[theme]?.white});
            background-color: rgba(${themes[theme]?.accent});
        }
        .CFBrV{
            color: rgb(${themes[theme]?.accent});
            background-color: rgb(${themes[theme]?.white});
        }
    `;

    return display && !user?.userData?.email_verified_at ? (
        <>
            <style>{css}</style>
            <div className="main_verify" tabIndex="-1">
                <div className="mid_verify" tabIndex="-1">
                    <div className="inner_verify">
                        <div className="qj1WD"></div>
                        <div className="qj1WD"></div>
                        <div className="Te4Pg">
                            <h3>
                                {
                                    'All the finest Tumblr users verify their email address. Check your inbox for the message we just sent.'
                                }
                            </h3>
                            <div className="YEJRy">
                                <Link
                                    className="bdzlZ"
                                    to="/settings/account/email"
                                    aria-label="Update Email"
                                >
                                    Update Email
                                </Link>
                                <button
                                    onClick={() => {
                                        setIsPending(true);
                                        resendEmailVerification(
                                            user?.token,
                                            setDisplay,
                                            setIsPending
                                        );
                                    }}
                                    className="TRX6J"
                                    disabled={isPending}
                                >
                                    <span className="CFBrV">
                                        {!isPending ? (
                                            <>Resend</>
                                        ) : (
                                            <CircularProgress
                                                style={{
                                                    width: '20px',
                                                    height: '20px'
                                                }}
                                            />
                                        )}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <></>
    );
}
