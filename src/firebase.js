import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCw2luT-fWCHeU-xhXbndxy7tSLNl3O54k",
    authDomain: "react-global-chat-77aed.firebaseapp.com",
    projectId: "react-global-chat-77aed",
    storageBucket: "react-global-chat-77aed.appspot.com",
    messagingSenderId: "628753201334",
    appId: "1:628753201334:web:5b6747e4ddba9a58cace17"
});

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth }