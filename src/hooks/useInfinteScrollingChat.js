import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/userContext/UserContext';
import Axios from 'axios';

const useInfiniteScrollingChat = (url,pageNumber) => {
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
                    // load first page
                    if (!loadingFirstPage) {
                        setBlogData(res.data.blog_data);
                        setLoadingFirstPage(true);
                    }
                    let rev = res?.data?.messages?.reverse();
                   // console.log(rev);
                    if (pageNumber === 1) {
                        setData(rev);
                    } else {
                        if (rev) {
                            if (data && data?.length) {
                                setData(prevData => {
                                    return [...rev, ...prevData];
                                });
                            } else {
                                setData(rev);
                            }
                        }
                    }
                    setIsPending(false);
                    setHasMore(res?.data?.next_url);
                    setError(null);
                } else {
                    throw Error(res?.error);
                }
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    setIsPending(false);
                    setError(err?.message);
                }
            });

        return () => {
            return abortCont.abort();
        };
    }, [url]);

    return { error, data, isPending, hasMore, blogData, loadingFirstPage };
};

export default useInfiniteScrollingChat;
