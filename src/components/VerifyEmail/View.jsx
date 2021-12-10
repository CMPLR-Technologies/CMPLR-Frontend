import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { resendEmailVerification } from './Service';
import { UserContext } from '../../contexts/userContext/UserContext';

export default function VerifyEmail() {
    const { user } = useContext(UserContext);
    return (
        <>
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
                                    onClick={() =>
                                        resendEmailVerification(user?.token)
                                    }
                                    className="TRX6J"
                                >
                                    <span className="CFBrV">Resend</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
