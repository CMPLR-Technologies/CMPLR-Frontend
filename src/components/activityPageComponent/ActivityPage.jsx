import React, { useContext } from 'react';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';
import HeaderGraph from './containers/HeaderGraph';
import BiggestFans from './containers/BiggestFans';
export default function ActivityPage() {
    const theme = useContext(ThemeContext)[0];
    const css = `
    .btns .box{
        background:rgba(${themes[theme].whiteOnDark},.13);
    }
    .btns .box  span:first-of-type{
        color: RGB(${themes[theme].whiteOnDark});
    }
    .btns .box  span:last-of-type{
        color: rgba(${themes[theme].whiteOnDark},.65);
    }
    .BiggestFans .head{
            color: rgb(${themes[theme].whiteOnDark});
    }
    `;

    return (
        <div className="activity-home">
            <div className="activity-container">
                <HeaderGraph />
                <BiggestFans />
            </div>
            <style>{css}</style>
        </div>
    );
}
