import React, { useState, useEffect } from 'react';
//import isAuth from '../../../../hooks/isAuth';
import { Link } from 'react-router-dom';
import Navbar2MainViewSearchBar from './Navbar2MainViewSearchBar';
export default function Navbar2MainViewSection1() {
    const [mobileView, setMobileView] = useState(false);
    const chaneMobileView = () => {
        if (window.innerWidth > 960) {
            setMobileView(false);
        } else {
            setMobileView(true);
        }
    };

    useEffect(() => {
        chaneMobileView();
    }, []);
    window.addEventListener('resize', chaneMobileView);

    return (
        <div className="section1">
            <div className="logo main">
                {/*isAuth() ? '/dashboard' : '/'*/}
                <Link to="/dashboard">
                    <span className="fa fa-downcase-t"></span>
                </Link>
            </div>
            {!mobileView && <Navbar2MainViewSearchBar name="gaser" />}
        </div>
    );
}
