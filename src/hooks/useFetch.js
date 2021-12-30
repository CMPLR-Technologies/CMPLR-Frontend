import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/userContext/UserContext';
import Axios from 'axios';

const useFetch = url => {
    const { user } = useContext(UserContext);
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const abortCont = new AbortController();

    useEffect(() => {
        const config = {
            signal: abortCont.signals
        };

        if (user) {
            config['headers'] = {
                Authorization: `Bearer ${user.token}`,
                Accept: 'application/json'
            };
        }

        Axios.get(url, config)
            .then(res => {
                if (!res.error) {
                    setData(res.data.response);
                    setIsPending(false);
                    setError(null);
                } else {
                    throw Error(res.error);
                }
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    setIsPending(false);
                    setError(err.message);
                }
            });

        return () => {
            return abortCont.abort();
        };
    }, [url]);

    return { error, data, isPending ,setData};
};

export default useFetch;
