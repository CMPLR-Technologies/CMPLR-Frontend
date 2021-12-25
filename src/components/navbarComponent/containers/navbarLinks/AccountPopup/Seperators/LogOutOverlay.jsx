import React, { useContext } from 'react';
import { apiBaseUrl } from '../../../../../../config.json';
import Axios from 'axios';
import {
    ThemeContext,
    themes
} from '../../../../../../contexts/themeContext/ThemeContext';
import { UserContext } from '../../../../../../contexts/userContext/UserContext';
import AuthBtn from '../../../../../partials/AuthBtn';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

/** EDIT THIS!!!!
 * @function LogOutOverlay
 * @property {function} hideOverlay - sets overlay to false in parent component
 * @property {function} logOut - event handling function to handle loging out
 * @returns {Component}
 */

export default function LogOutOverlay(props) {
    const [theme, changeTheme] = useContext(ThemeContext);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const logOut = () => {
        const config = { headers: { Authorization: `Bearer ${user.token}` } };
        Axios.post(`${apiBaseUrl}/logout`, {}, config)
            .then(() => {
                setUser(null);
                changeTheme('trueBlue');
                localStorage.removeItem('user');
                navigate('/');
            })
            .catch(() => {});
    };

    const { hideOverlay } = props;

    return (
        <div data-testid="LogOutOverlay" className={'log-out-overlay'}>
            <div className="log-out-overlay-text">
                Are you sure you want to log out?
            </div>
            <div className="log-out-overlay-buttons-row">
                <AuthBtn
                    key="1"
                    color={`rgba(${themes[theme].whiteOnDark} ,.65)`}
                    text="Cancel"
                    handleClick={hideOverlay}
                />{' '}
                <AuthBtn
                    key="2"
                    color={`rgb(${themes[theme].accent})`}
                    text="OK"
                    handleClick={logOut}
                />
            </div>
        </div>
    );
}

LogOutOverlay.propTypes = {
    hideOverlay: PropTypes.func.isRequired
};
