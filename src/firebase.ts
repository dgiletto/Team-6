import firebase from "firebase/app";
import { getAuth } from "firebase/auth";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSSGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
});

export const auth = getAuth(app);
export default app;
