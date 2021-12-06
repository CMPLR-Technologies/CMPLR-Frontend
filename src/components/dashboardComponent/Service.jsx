import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

const getRecommendedBlogs = setRecommendedBlogs => {
    Axios.get(`${apiBaseUrl}/recommended-blogs`)
        .then(res => {
            setRecommendedBlogs(res);
        })
        .catch(() => {
            return null;
        });
};

export { getRecommendedBlogs };
