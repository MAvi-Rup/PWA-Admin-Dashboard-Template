// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDhsQo_ZkZluuJPd_c4AIG_jPkGU89tT0",
    authDomain: "pwa-web-f2p.firebaseapp.com",
    projectId: "pwa-web-f2p",
    storageBucket: "pwa-web-f2p.appspot.com",
    messagingSenderId: "444709689458",
    appId: "1:444709689458:web:5c57826226c953e9680aeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;