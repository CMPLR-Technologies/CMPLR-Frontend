import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/userContext/UserContext';
import Axios from 'axios';

const useInfiniteScrolling = (url, response = true) => {
    const { user } = useContext(UserContext);
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(false);
    const [total, setTotal] = useState(0);

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
                    setData(prevData => {
                        let newArr = response
                            ? res.data.response.post
                            : res.data.post;
                        return [...prevData, ...newArr];
                    });
                    setIsPending(false);
                    setHasMore(
                        response
                            ? res.data.response.next_url
                            : res.data.next_url
                    );
                    setError(null);
                    setTotal(
                        response ? res.data?.response?.total : res.data?.total
                    );
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

    return { error, data, isPending, hasMore, total };
};

export default useInfiniteScrolling;
