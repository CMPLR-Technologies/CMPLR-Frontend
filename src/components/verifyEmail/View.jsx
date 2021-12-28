import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { resendEmailVerification } from './Service';
import { CircularProgress } from '@mui/material';

export default function VerifyEmail() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [display, setDisplay] = useState(
        !user?.userData?.email_verified_at ? true : false
    );
    const [isPending, setIsPending] = useState(false);

    return display ? (
        <>
            <div className="main_verify" tabIndex="-1">
                <div className="mid_verify" tabIndex="-1">
                    <div className="inner_verify">
                        <div className="qj1WD"></div>
                        <div className="qj1WD"></div>
                        <div className="Te4Pg">
                            <h3>
                                {
                                    'All the finest CMPlr users verify their email address. Check your inbox for the message we just sent.'
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
