import { validatePosting } from './Controller';
import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const handlePosting = (bodyData, navigate) => {
    let errors = validatePosting(bodyData?.title, bodyData?.content);

    if (errors?.length > 0) {
        //console.log(errors);
        return { status: false, err: errors };
    } else {
        Axios({
            method: 'POST',
            url: `${apiBaseUrl}/posts`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            data: bodyData
        })
            .then(res => {
                navigate('/dashboard');
                return res;
            })
            .catch(err => {
                return err;
            });
    }
};
