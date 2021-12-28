import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const getFollowersList = (
    setFollowingList,
    followingList,
    userToken,
    blogName,
    setIsPending,
    setError,
    setTotalFollowing,
    page,
    setPage,
    setHasMore
) => {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/blog/${blogName}/followers?page=${page}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${userToken}`
        }
    })
        .then(res => {
            setIsPending(false);
            setFollowingList(res?.data?.response?.followers);
            setTotalFollowing(
                res?.data?.response?.number_of_followers
                    ? res?.data?.response?.number_of_followers
                    : 0
            );
            const newPage = page + 1;
            setPage(newPage);
        })
        .catch(() => {
            setError(true);
            setIsPending(false);
        });
};

export function getBlogPosts(blogUrlIdf, userToken, setPosts, setIsPending) {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/posts/view/${blogUrlIdf}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${userToken}`
        }
    })
        .then(res => {
            if (!res.error) {
                setPosts(res?.data?.response?.post);
                setIsPending(false);
            }
        })
        .catch(() => {});
}
