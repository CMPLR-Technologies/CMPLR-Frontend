import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const uploadSelectedImage = (
    file,
    setContent,
    setSpinner,
    userToken
) => {
    let formData = new FormData();
    formData.append('image', file);
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/image_upload`,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${userToken}`
        },
        data: formData
    })
        .then(res => {
            setSpinner(false);

            let newImage = document.createElement('img'); // Create a <li> node
            newImage.src = res?.data?.response?.url;
            document.getElementById('editable-content').appendChild(newImage);
            setContent(document.getElementById('editable-content').innerHTML);
        })
        .catch(() => {
            setSpinner(false);
        });
};

export const uploadSelectedVideo = (
    file,
    setContent,
    setSpinner,
    userToken
) => {
    let formData = new FormData();
    formData.append('video', file);
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/video_upload`,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${userToken}`
        },
        data: formData
    })
        .then(res => {
            let url = res?.data?.response?.url;
            let newSrc = document.createElement('source');
            newSrc.src = url;
            newSrc.type = 'video/mp4';
            let newVideo = document.createElement('video');
            newVideo.controls = true;

            newVideo.appendChild(newSrc);
            document.getElementById('editable-content').appendChild(newVideo);

            setContent(document.getElementById('editable-content').innerHTML);
            setSpinner(false);
        })
        .catch(() => {
            setSpinner(false);
        });
};
