/* eslint-disable camelcase */
import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const uploadSelectedImage = (file, setSpinner) => {
    let formData = new FormData();
    formData.append('image', file);
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/image_upload`,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: formData
    })
        .then(res => {
            console.log('respond ', res);
            setSpinner(false);
            return res.data.url;
        })
        .catch(err => {
            setSpinner(false);
            console.log('error ', err);
        });
};

export const uploadSelectedVideo = (file, setSpinner) => {
    let formData = new FormData();
    formData.append('video', file);
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/video_upload`,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: {
            video: file
        }
    })
        .then(res => {
            console.log(res);
            setSpinner(false);
            return res.data.url;
        })
        .catch(err => {
            setSpinner(false);
            console.log(err);
        });
};
