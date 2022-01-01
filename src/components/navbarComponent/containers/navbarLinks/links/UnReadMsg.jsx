import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
    ThemeContext,
    themes
} from '../../../../../contexts/themeContext/ThemeContext';
/**
 * UnReadMsg Badge: Badge is a box contain a number of unread messages
 * @function Badge
 * @description UnReadMsg is a box contain a number of unread messages
 * @returns {Component} Badge is a box contain a number of unread messages
 */
export default function UnReadMsg(props) {
    let { unReadMsgs } = props;
    const theme = useContext(ThemeContext)[0];
    const css = `
    .un-read-msgs {
        background: RGB(${themes[theme].accent});
        border: 2px solid rgb(${themes[theme].navy});
        color: RGB(${themes[theme].navy});
    }
    `;
    return (
        <div className="un-read-msgs">
            {unReadMsgs}
            <style>{css}</style>
        </div>
    );
}

UnReadMsg.propTypes = {
    unReadMsgs: PropTypes.number.isRequired
};
