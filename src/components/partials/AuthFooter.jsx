import React from 'react';

/**
 * @function AuthFooter
 * @description Custom footer for the login and sign up page
 * @returns Div footer
 */

export default function AuthFooter() {
    return (
        <div className="AuthFooter">
            <div className="AuthFooter__left">
                <a href="/">Terms</a>
                <a href="/">Privacy</a>
                <a href="/">Jobs</a>
                <a href="/">Support</a>
            </div>

            <div className="AuthFooter__right"></div>
        </div>
    );
}
