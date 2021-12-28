import React, { useContext, useState } from 'react';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';
import HeaderGraph from './containers/HeaderGraph';
import BiggestFans from './containers/BiggestFans';
import Notification from '../navbarComponent/containers/Notifications/Notifications';
import { useEffect } from 'react';
import { apiBaseUrl } from '../../config.json';
import axios from 'axios';
export default function ActivityPage() {
    const theme = useContext(ThemeContext)[0];
    const user = JSON.parse(localStorage.getItem('user'));
    const [notfArray, setNotfArray] = useState(null);
    useEffect(() => {
        user?.blogName !== undefined &&
            axios({
                method: 'GET',
                url: `${apiBaseUrl}/blog/${user?.blogName}/notifications`,
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${user?.token}`
                }
            })
                .then(res => {
                    if (res.data.meta.status_code === 200)
                        setNotfArray(res.data.response);
                })
                .catch(() => {});
    }, []);

    useEffect(() => {
        user?.blogName !== undefined &&
            axios({
                method: 'GET',
                url: `${apiBaseUrl}/blog/${user?.blogName}/last-ndays-activity?lastNdays=7`,
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${user?.token}`
                }
            })
                .then(res => {
                    if (res.data.meta.status_code === 200) {
                        console.log(res.data.response);
                    }
                })
                .catch((err) => {
                    console.log(err?.message);
                });
    }, []);
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
                <Notification
                    activity={true}
                    notfArray={notfArray && notfArray}
                />
            </div>
            <style>{css}</style>
        </div>
    );
}
