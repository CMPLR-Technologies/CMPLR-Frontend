import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const getHashtagData = (tagName, setPosts, setIsPending, setError) => {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/tags/${tagName}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
        .then(res => {
            setIsPending(false);
            setPosts(res?.data?.response?.posts);
            setError(false);
        })
        .catch(() => {
            setIsPending(false);
            setError(true);
        });
};

export const getHashtagInformation = (
    tagName,
    setHashtag,
    setIsPending,
    setError
) => {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/tags/${tagName}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
        .then(res => {
            setIsPending(false);
            setHashtag(res?.data?.response?.tag);
            setError(false);
        })
        .catch(() => {
            setIsPending(false);
            setError(true);
        });
};
