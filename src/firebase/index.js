import firebase  from 'firebase/compat/app';
import "firebase/firebase-storage-compat";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuOBuwW740dn0CLqNlHgLq2kL2A-FEyS8",
    authDomain: "cmplr-332719.firebaseapp.com",
    projectId: "cmplr-332719",
    storageBucket: "cmplr-332719.appspot.com",
    messagingSenderId: "136680268889",
    appId: "1:136680268889:web:5af907e7f3d8bfa09cfd48",
    measurementId: "G-R75ZE9JBME"
  };

firebase.initializeApp(firebaseConfig);

//firebase.storage();
export { firebase as default};