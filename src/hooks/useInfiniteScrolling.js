import { useEffect, useState } from 'react';
import Axios from 'axios';

const useInfiniteScrolling = url => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(false);

    const abortCont = new AbortController();

    useEffect(() => {
        setIsPending(true);
        setError(null);

        Axios.get(url, {
            signal: abortCont.signal
        })
            .then(res => {
                if (!res.error) {
                    setData(prevData => {
                        return [...prevData, ...res.data];
                    });
                    setIsPending(false);
                    setHasMore(res?.data?.length > 0);
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
