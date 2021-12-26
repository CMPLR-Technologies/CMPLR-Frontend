import React, { useState } from 'react';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import '../../../../../styles/styles.css';
import MessagesPopUp from '../MessagesPopup/MessagesPopUp';
import AccountPopup from '../AccountPopup/AccountPopup';
import { Link, NavLink } from 'react-router-dom';
import Notifications from '../../Notifications/Notifications';
import Badge from './Badge';
import { useEffect } from 'react';
import Axios from 'axios';
import { apiBaseUrl } from '../../../../../config.json';
/**
 * Navbar AuthLinks: includes all links dashboard and inbox and expolre ...
 * @function NavbarAuthLinks
 * @property {boolean} openMessagePopup - Open message popup state open drop down list for messages
 * @property {function} setOpenMessagePopup - Open message popup Setter state
 * @property {boolean} openNotificationsPopup - Open notifications popup state open drop down list for notifications
 * @property {function} setOpenNotificationsPopup - Open notifications popup Setter state
 * @property {boolean} openAccountPopup - Open account popup state open drop down list for account
 * @property {function} setOpenAccountPopup - Open account popup Setter state
 * @returns {Component} links to all pages and drop down lists
 */
export default function AuthLinks() {
    //dropdown lists
    const [openMessagePopup, setOpenMessagePopup] = useState(false);
    const [openNotificationsPopup, setOpenNotificationsPopup] = useState(false);
    const [openAccountPopup, setOpenAccountPopup] = useState(false);
    const [notfArray, setNotfArray] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));

    //const [openPopup, setOpenPopup] = useState(false);

    //close dropdown message list
    const closeMessagePopup = () => {
        setOpenMessagePopup(false);
        //console.log("colse");
    };
    const closeAccountPopup = () => {
        setOpenAccountPopup(false);
        //console.log("colse");
    };
    const clickMessagePopup = () => {
        // if i open it
        if (!openMessagePopup) {
            //close other popup
            setOpenNotificationsPopup(false);
            setOpenAccountPopup(false);
        }
        setOpenMessagePopup(!openMessagePopup);
    };
    const clickNotificationsPopup = () => {
        // if i open it
        if (!openNotificationsPopup) {
            //close other popup
            setOpenMessagePopup(false);
            setOpenAccountPopup(false);
        }
        setOpenNotificationsPopup(!openNotificationsPopup);
    };
    const clickAccountPopup = () => {
        // if i open it
        if (!openAccountPopup) {
            //close other popup
            setOpenMessagePopup(false);
            setOpenNotificationsPopup(false);
        }
        setOpenAccountPopup(!openAccountPopup);
    };

    useEffect(() => {
        Axios({
            method: 'GET',
            url: `${apiBaseUrl}/blog/${user?.blogName}/notifications`,
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${user?.token}`
            }
        }).then(res => {
            if (res.data.meta.status_code === 200)
                setNotfArray(res.data.response);
        });
    }, []);

    /*  const clickOpenPopup = () => {
    console.log("closeg");
    setOpenPopup(!openPopup);
  };*/
    return (
        <>
            {/*TODO make this link to dashboard */}
            <li className="link-icon">
                <NavLink
                    className={navData => (navData.isActive ? 'active' : '')}
                    to="/dashboard"
                >
                    <i className="fas fa-home"></i>
                </NavLink>
            </li>
            {/*TODO make this link to recommended for you */}
            <li className="link-icon">
                <NavLink
                    className={navData => (navData.isActive ? 'active' : '')}
                    to="/explore/recommended-for-you"
                >
                    <i className="far fa-compass"></i>
                </NavLink>
            </li>
            {/*TODO make this link to inbox */}
            <li className="link-icon">
                <NavLink
                    className={navData => (navData.isActive ? 'active' : '')}
                    to="/inbox"
                >
                    <i className="fas fa-envelope"></i>
                </NavLink>
            </li>

            <ClickAwayListener onClickAway={closeMessagePopup}>
                <div className="link-popup">
                    <li
                        onClick={clickMessagePopup}
                        className={`link-icon message ${
                            openMessagePopup ? 'active' : ''
                        }`}
                    >
                        <i className="fas fa-comment-dots"></i>
                    </li>
                    {openMessagePopup && <MessagesPopUp />}
                </div>
            </ClickAwayListener>
            <div className="notifications-btn">
                <li
                    onClick={clickNotificationsPopup}
                    className={`link-icon  ${
                        openNotificationsPopup ? 'active' : ''
                    }`}
                >
                    <i className="fas fa-bolt"></i>
                </li>
                {notfArray?.unseen && <Badge num={notfArray?.unseen} />}
                {openNotificationsPopup && (
                    <Notifications
                        userBlogName={user?.blogName}
                        userAvatar={user?.userData?.avatar}
                        notfArray={notfArray && notfArray}
                        setNotfArray={setNotfArray}
                    />
                )}
            </div>
            <ClickAwayListener onClickAway={closeAccountPopup}>
                <div className="link-popup">
                    <li
                        onClick={clickAccountPopup}
                        className={`link-icon  ${
                            openAccountPopup ? 'active' : ''
                        }`}
                    >
                        <i className="fas fa-user"></i>
                    </li>
                    {openAccountPopup && <AccountPopup />}
                </div>
            </ClickAwayListener>
            <li className="link-icon pen">
                <Link to="/new">
                    <i className="fas fa-pen"></i>
                </Link>
            </li>
            {/* <Route
        path="/new"
        children={({ match }) => (
          <NewPostPopup onClose={history.goBack} open={match} />
        )}
        />*/}
        </>
    );
}
