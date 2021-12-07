import { useEffect, useState } from 'react';
import Axios from 'axios';

const useFetch = url => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const abortCont = new AbortController();

    useEffect(() => {
        setTimeout(() => {
            Axios.get(url, {
                signal: abortCont.signal
            })
                .then(res => {
                    if (!res.error) {
                        setData(res.data);
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
        }, 3000);
        return () => {
            return abortCont.abort();
        };
    }, [url]);

    return { error, data, isPending };
};

export default useFetch;
