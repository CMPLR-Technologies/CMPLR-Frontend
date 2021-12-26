import firebase from 'firebase/app';
import 'firebase/messaging';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAZfVxNvDvTw13z5hRfCEeh7KphBLDauus',
    authDomain: 'cmplr-push-notifications.firebaseapp.com',
    projectId: 'cmplr-push-notifications',
    storageBucket: 'cmplr-push-notifications.appspot.com',
    messagingSenderId: '429511278691',
    appId: '1:429511278691:web:5a3a4310618d154461f856'
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async setTokenFound => {
    let currentToken = '';

    try {
        currentToken = await messaging.getToken({ vapidKey: publicKey });
        if (currentToken) {
            setTokenFound(true);
        } else {
            setTokenFound(false);
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('An error occurred while retrieving token. ', error);
    }

    return currentToken;
};

export const onMessageListener = () =>
    new Promise(resolve => {
        messaging.onMessage(payload => {
            resolve(payload);
        });
    });
