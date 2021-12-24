import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

const getSearchRes = async (searchWord, setSearchResults, setLoading) => {
    try {
        setLoading(true);
        const res = await Axios.get(`${apiBaseUrl}/search/${searchWord}`);
        console.log(res.data);
        setSearchResults(res.data.response);
        setLoading(false);
    } catch (error) {
        console.log(error);
        return null;
    }
};

export { getSearchRes };
