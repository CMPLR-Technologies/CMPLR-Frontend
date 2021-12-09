import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import NavbarLinks from './containers/navbarLinks/NavbarLinks';
import NavbarSection1 from './containers/section1/NavbarSection1';
import { UserContext } from '../../contexts/userContext/UserContext';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';

/**
 * Navbar Main Component
 * @function Navbar
 * @description this is the main Component of navbar contains in it's body all the navbar components
 * @returns {Component} navbar_section1_logo&searchbar & navbar-links
 */
export default function Navbar() {
    const theme = useContext(ThemeContext)[0];
    const css = `
        .nav {
            border-bottom: 0.5px solid rgba(${themes[theme].whiteOnDark}, 0.15);
        }
        .search{
            background-color: rgba(${themes[theme].whiteOnDark}, 0.15);
        }
        .search-icon{
            color: rgba(${themes[theme].whiteOnDark}, 0.65);
        }
        .search-icon i{
            color: rgba(${themes[theme].whiteOnDark}, 0.65);
        }
        .search-input{
            color: rgba(${themes[theme].whiteOnDark}, 0.65);
        }

        .search-result{
            background-color: rgb(${themes[theme].white});
            box-shadow: 0 0 15px 0 rgb(0 0 0 / 50%);
            color: rgb(${themes[theme].black});
        }

        .search-result ul li{
            color: rgb(${themes[theme].black});
        }

        .search-result ul li:hover, .search-result-dis{
            background-color: rgb(${themes[theme].secondaryAccent});
        }

        .search-result ul li i{
            color: rgb(${themes[theme].black});
        }

        .fa-downcase-t:before{
            color: rgb(${themes[theme].whiteOnDark});
        }
        
        .nav .section1 .search .search-result ul span.color{
            color: rgb(${themes[theme].accent});
        }
        .nav .section1 .search .search-result ul .search-result-blog-section1-text h3, h3.search-result-dis{
            color: rgb(${themes[theme].black});
        }
        .nav .section1 .search .search-result ul .search-result-blog-section1-text h4{
            color: rgba(${themes[theme].black}, 0.65);
        }
        .nav .section1 .search .search-result ul .search-result-blog-button button{
            color: rgb(${themes[theme].accent});
        }

        .search.focus {
            background-color:  rgb(${themes[theme].white});
        }
        .search.focus .search-input {
            color:  rgb(${themes[theme].black});
        }
        .search.focus .search-icon i {
            color:  rgb(${themes[theme].black});
        }

        .section2 .link-icon a i, .section2 .link-icon i{
            color: rgba(${themes[theme].whiteOnDark}, 0.65);
        }
        .section2 .link-icon a.active i, .section2 .link-icon.active i{
            color: rgba(${themes[theme].whiteOnDark});
        }

        .link-icon.pen{
            background-color: rgb(${themes[theme].accent});
        }
        .nav .section2 .link-icon.pen i{
            color: rgb(${themes[theme].navy});
        }

        .popup{
            background-color: rgb(${themes[theme].white});
            color: rgb(${themes[theme].black});
            box-shadow: 0 0 15px 0 rgb(0 0 0 / 50%);
        }
        
        .popup-header, .popup-messages-message{
            background-color: rgb(${themes[theme].white});
            border-bottom: 0.5px solid rgba(${themes[theme].black}, 0.13);
        }
        .popup-header h3{
            color: rgb(${themes[theme].black});
        }
        .popup-header button{
            color: rgb(${themes[theme].accent});
        }
        .popup-header .never{
            color: rgba(var(${themes[theme].black}),.4);
        }
        .popup-messages-message:hover {
            background-color: rgb(${themes[theme].secondaryAccent});
        }
        .popup-messages .receiver, .popup-messages-message .receiver{
            color: rgb(${themes[theme].black});
        }

        .popup-newmessage-header input, .popup-newmessage-header span, .popup-messages .message,.popup-messages-message .message, .popup-messages .sender {
            color: rgba(${themes[theme].black},0.65);
        }

        .messagepage-mobile .popup-messages{
            background-color: rgb(${themes[theme].navy});
        }
        .messagepage-mobile .popup-header{
            background-color: rgb(${themes[theme].navy});
        }
        .messagepage-mobile .popup-header h3{
            color: rgb(${themes[theme].whiteOnDark});
        }
        .messagepage-mobile .popup-header span i{
            color: rgba(${themes[theme].whiteOnDark}, .65);
        }
        .new-post-popup{
            background-color: rgba(${themes[theme].navy},.95);
        }
        .new-post-popup-box-icon i{
            color: rgb(${themes[theme].navy});
        }
    .new-post-popup-box-icon1 { ${/*remove important later*/ ''}
            background-color: rgb(${themes[theme].whiteOnDark}) !important;
        }
        .new-post-popup-box-text{
            color: rgb(${themes[theme].whiteOnDark});
        }


    `;

    const [mobileView, setMobileView] = useState(false);
    const { user } = useContext(UserContext);
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
    let nav = (
        <div className="nav">
            <div className="nav-container">
                {/*section 1 contains logo and search bar*/}
                <NavbarSection1 />
                {/*section 2 contains links*/}
                <NavbarLinks isAuth={user ? true : false} />
            </div>
            <style>{css}</style>
        </div>
    );

    // if not user auth and mobile view hide navbar
    if (mobileView && (user ? false : true)) nav = null;
    return nav;
}
