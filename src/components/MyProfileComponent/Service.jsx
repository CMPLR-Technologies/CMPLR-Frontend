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
            let newArr = [];
            if (res?.data?.response?.followers?.length !== 0) {
                newArr = res?.data?.response?.followers;
            }
            if (res?.data?.response?.followers?.length < 15) {
                setHasMore(false);
            }
            setFollowingList([...followingList, ...newArr]);
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
