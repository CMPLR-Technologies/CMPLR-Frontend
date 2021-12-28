import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const getFollowersList = (
    setFollowingList,
    followingList,
    userToken,
    setIsPending,
    setError,
    setTotalFollowing,
    page,
    setPage,
    setHasMore
) => {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/user/followers?page=${page}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${userToken}`
        }
    })
        .then(res => {
            setIsPending(false);
            let newArr = [];
            if (res?.data?.response?.blogs?.length !== 0) {
                newArr = res?.data?.response?.blogs;
            }
            if (res?.data?.response?.blogs?.length < 15) {
                setHasMore(false);
            }
            setFollowingList([...followingList, ...newArr]);
            setTotalFollowing(
                res?.data?.response?.total_following
                    ? res?.data?.response?.total_following
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
