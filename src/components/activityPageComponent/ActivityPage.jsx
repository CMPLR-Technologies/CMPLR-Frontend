import React, { useContext, useState } from 'react';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';
import HeaderGraph from './containers/HeaderGraph';
//import BiggestFans from './containers/BiggestFans';
import Notification from '../navbarComponent/containers/Notifications/Notifications';
import { useEffect } from 'react';
import { apiBaseUrl } from '../../config.json';
import axios from 'axios';
import { useParams } from 'react-router-dom';

/**
 * ActivityPage: ActivityPage is a page include the activity of the user
 * @function ActivityPage
 * @description this is the main Component of  ActivityPage includes the activity of the user
 * @returns {Component} header graph component and notifigation component
 */
export default function ActivityPage() {
    const theme = useContext(ThemeContext)[0];
    const user = JSON.parse(localStorage.getItem('user'));
    const [notfArray, setNotfArray] = useState(null);
    const [dates, setDates] = useState([]);
    const [notes, setNotes] = useState([]);
    const [nF, setNF] = useState([]);
    const [tF, setTf] = useState([]);
    const [notesCount, setNotesCount] = useState(0);
    const [nFCount, setNFCount] = useState(0);
    const [tFCount, setTFCount] = useState(0);
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [showSideBlog, setShowSideBlog] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [sidePostID, setSidePostID] = useState('');
    const [sideBlogName, setSideBlogName] = useState('');
    const [sideBlogId, setSideBlogId] = useState(0);
    const { blogUrlIdf } = useParams();
    useEffect(() => {
        user?.blogName !== undefined &&
            axios({
                method: 'GET',
                url: `${apiBaseUrl}/blog/${blogUrlIdf}/notifications`,
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
        setLoading(true);
        user?.blogName !== undefined &&
            axios({
                method: 'GET',
                url: `${apiBaseUrl}/blog/${blogUrlIdf}/last-ndays-activity?lastNdays=7`,
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${user?.token}`
                }
            })
                .then(res => {
                    if (res.data.meta.status_code === 200) {
                        let arrDates = [];
                        let arrNotes = [];
                        let arrNF = [];
                        let arrTF = [];
                        let notesC = 0;
                        let nFC = 0;
                        let tFC = 0;

                        res.data.response.data.forEach(element => {
                            //notes: 0, new followers: 0, total followers: 0, date: '23-12-2021'
                            arrNotes.push(element.notes);
                            arrNF.push(element.new_followers);
                            arrTF.push(element.total_followers);
                            arrDates.push(element.date);
                            notesC += element.notes;
                            nFC += element.new_followers;
                            tFC += element.total_followers;
                        });
                        setDates(arrDates);
                        setNF(arrNF);
                        setTf(arrTF);
                        setNotes(arrNotes);
                        setNotesCount(notesC);
                        setNFCount(nFC);
                        setTFCount(tFC);
                        setLoading(false);
                    }
                })
                .catch(() => {});
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
    .Lhead{
        color: rgb(${themes[theme].whiteOnDark});
    }
    `;
    return (
        <div className="activity-home">
            <div className="activity-container">
                <HeaderGraph
                    dates={dates}
                    notes={notes}
                    nF={nF}
                    tF={tF}
                    notesCount={notesCount}
                    nFCount={nFCount}
                    tFCount={tFCount}
                    loading={loading}
                />
                {/*<BiggestFans />*/}
                <div className="Lhead">Latest Notes</div>
                <Notification
                    activity={true}
                    notfArray={notfArray && notfArray}
                    setShowSideBlog={setShowSideBlog}
                    sideBlogId={sideBlogId}
                    setSideBlogId={setSideBlogId}
                    sideBlogName={sideBlogName}
                    setSideBlogName={setSideBlogName}
                />
            </div>
            <style>{css}</style>
        </div>
    );
}
