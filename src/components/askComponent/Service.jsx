import axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export function AskQuestion(blogNameToAsk, question, token) {
    return axios({
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        url: `${apiBaseUrl}/blog/${blogNameToAsk}/ask`,
        data: {
            content: question,
            mobile: 0,
            is_anonymous: 0
        }
    })
        .then(res => {
            if (res?.data?.meta?.status_code === 201) {
                return 0;
            }
        })
        .catch(err => {
            if (err?.response?.status === 401) {
                return 1;
            } else if (err?.response?.status === 403) {
                return 2;
            } else return 3;
        });
}

export function AnswerQuestion(askId, answerAndQuestion, token, state) {
    return axios({
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        url: `${apiBaseUrl}/ask/${askId}`,
        data: {
            content: answerAndQuestion,
            mobile: 0,
            state: state
        }
    })
        .then(res => {
            if (res?.data?.meta?.status_code === 200) {
                return 1;
            }
        })
        .catch(err => {
            if (err?.response?.status === 403) {
                return 2;
            } else if (err?.response?.status === 404) {
                return 3;
            } else return 4;
        });
}

export function deleteAsk(askId, token) {
    axios({
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        url: `${apiBaseUrl}/ask/${askId}`
    })
        .then(res => {
            if (res?.data?.meta?.status_code === 202) {
                return 1;
            }
        })
        .catch(err => {
            if (err?.response?.status === 403) {
                return 2;
            } else if (err?.response?.status === 404) {
                return 3;
            } else return 4;
        });
}
