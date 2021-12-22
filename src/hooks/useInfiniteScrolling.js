import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/userContext/UserContext';
import Axios from 'axios';

const useInfiniteScrolling = (url,type) => {
    const { user } = useContext(UserContext);
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(false);

    const abortCont = new AbortController();

    useEffect(() => {
        setIsPending(true);
        setError(null);

        const config = { signal: abortCont.signal };
        if (user) {
            config['headers'] = {
                Authorization: `Bearer ${user.token}`,
                Accept: 'application/json'
            };
        }
        Axios.get(url, config)
            .then(res => {
                if (!res.error) {
                    console.log(res.data[0].data);
                    setData(prevData => {
                        if(type==='post')
                            return [...prevData, ...res.data.response.post];
                        else
                            return [ ...res.data[0].data,...prevData];
                    });
                    setIsPending(false);
                    setHasMore(res.data[0].next_url);
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

    return { error, data, isPending, hasMore };
};

export default useInfiniteScrolling;
