import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

const getSearchRes = async (searchWord, setSearchResults, setLoading) => {
    try {
        setLoading(true);
        const res = await Axios.get(`${apiBaseUrl}/search/${searchWord}`);
        setSearchResults(res.data.response);
        setLoading(false);
    } catch (error) {
        console.log(error);
        return null;
    }
};

export { getSearchRes };

export function getNotifications(
    userBlogName,
    token,
    setNotfArray,
    setUnseenNotf
) {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/blog/${userBlogName}/notifications`,
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            if (res.data.meta.status_code === 200)
                setNotfArray(res.data.response);
        })
        .catch(() => {});
    Axios({
        method: 'get',
        url: `${apiBaseUrl}/notifications/unseens`,
        headers: {
            'content-type': 'application/json',
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            setUnseenNotf(res?.data?.response);
        })
        .catch(() => {});
}
