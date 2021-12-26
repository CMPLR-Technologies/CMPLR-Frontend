import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/userContext/UserContext';
import Axios from 'axios';

const useInfiniteScrollingChat = url => {
    const { user } = useContext(UserContext);
    const [data, setData] = useState([]);
    const [blogData, setBlogData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(false);
    const [loadingFirstPage, setLoadingFirstPage] = useState(false);
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
                    console.log(res.data);
                    // load first page
                    if (!loadingFirstPage) {
                        setBlogData(res.data.blog_data);
                        setLoadingFirstPage(true);
                    }
                    let rev=res.data.messages.reverse();
                    setData(prevData => {
                        return [...rev, ...prevData];
                    });
                    setIsPending(false);
                    setHasMore(res.data.next_url);
                    setError(null);
                } else {
                    //console.log("gaaaaa");
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
            console.log("gaaaaa");
            return abortCont.abort();
        };
    }, [url]);

    return { error, data, isPending, hasMore, blogData, loadingFirstPage };
};

export default useInfiniteScrollingChat;