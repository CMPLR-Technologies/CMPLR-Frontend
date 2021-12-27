import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import NavbarLinks from './containers/navbarLinks/NavbarLinks';
import NavbarSection1 from './containers/section1/NavbarSection1';
import { UserContext } from '../../contexts/userContext/UserContext';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';
import ChatView from '../chatComponent/View';
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
        .search-input::placeholder{
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
        .search.focus .search-input::placeholder {
            color:  rgb(${themes[theme].black},.50);
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
            background-color: rgb(${themes[theme].white});
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
        .badge{
            background-color:rgb(${themes[theme].accent});
            color:rgb(${themes[theme].navy});
            border:2px solid rgb(${themes[theme].navy});
        }
        .notf-date{
            color: rgba(${themes[theme].black} ,0.65);
            background-color: rgba(${themes[theme].black} ,0.07);
        }
        .notifications-container {
            scrollbar-color: rgba(${themes[theme].black}, 0.4) rgba(${
        themes[theme].white
    }, 0.1);
            background-color: rgb(${themes[theme].white});
        }

        @media screen and (max-width: 960px) {

            .nav {
                background: rgba(${themes[theme].navy});
            }
            .nav .section1 .menu-mobile-icon {
                color: rgba(${themes[theme].whiteOnDark});
            }
            .nav .section1 .search-mobile-icon {
                color: rgba(${themes[theme].whiteOnDark});
            }
            .nav .section1 .navbar-menu-mobile .navbar-menu-mobile-close{
                background: none;
                color: inherit;
            }
            .nav .section1 .navbar-menu-mobile .navbar-menu-mobile-close span{
                background-color: rgb(${themes[theme].navy}, 0.95);
            }
            .nav .section1 .navbar-menu-mobile .navbar-menu-mobile-menu {
                background-color:rgb(${themes[theme].navy});
            }
            .nav .section1 .navbar-menu-mobile .navbar-menu-mobile-menu .create-new-post  {
               
                color:rgb(${themes[theme].navy});
            }
           
            .nav .section1 .navbar-menu-mobile .navbar-menu-mobile-menu ul li a{
                color: rgb(${themes[theme].whiteOnDark});
            }
         
            .nav .section1 .search{
                background-color: rgb(${themes[theme].white});
            }
            .nav .section1 .search search-input::placeholder{
                background-color: $primiry-color;
            }
                
            .messagepage-mobile .receiver{
                color: rgb(${themes[theme].black});
            }
            .val{
                color: rgba(${themes[theme].whiteOnDark},.65);
                display:flex;
                align-items:center;
            }
            .blogs h3{
                color: rgba(${themes[theme].whiteOnDark});

            }
            .navbar-menu-mobile-footer footer a{
                color: rgba(${themes[theme].whiteOnDark});
            }
            .log-out-overlay{
                background: rgb(${themes[theme].navy});
            }
            .popup {
                &-header {
                    background-color: $primiry-bg;
                    h3 {
                        color: $primiry-color;
                    }
                    span {
                        i {
                            color: $primiry-color;
                        }
                    }
                }
            }
        .notf-types{
            color: rgba(${themes[theme].black}, 0.65);
        }
        .selected{
            color: rgb(${themes[theme].accent});
            border-bottom: 1px solid rgb(${themes[theme].accent});
        }
        .btn-control .caption{
            color: rgba(${themes[theme].black}, 0.65);
        }
        .hi-link{
            background-color: rgb(${themes[theme].accent});
        }
        .post-link{
            background-color: rgb(${themes[theme].black});
        }
        .ask-i-svg{
            fill:rgb(${themes[theme].white});
        }
        .ask-r-svg{
            fill:rgb(${themes[theme].black});
        }
        .follow-r-svg{
            fill:rgb(${themes[theme].black});
        }
        .hi-i-svg{
            fill:rgb(${themes[theme].white})
        }
        .post-i-svg{
            fill:rgb(${themes[theme].white});
        }
        .notf-content{
            color:rgb(${themes[theme].black})
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
                <ChatView />
                {/*section 1 contains logo and search bar*/}
                <NavbarSection1 />
                {/*section 2 contains links*/}
                {/*<NavbarLinks isAuth={user ? true : false} />*/}
                <NavbarLinks isAuth={user ? true : false} />
            </div>
            <style>{css}</style>
        </div>
    );

    // if not user auth and mobile view hide navbar
    if (mobileView && (user ? false : true)) nav = null;
    return nav;
}
