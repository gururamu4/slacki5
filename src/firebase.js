import { initializeApp, auth } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCDUOzNqsv0AAE7rZ1fFnLJU_ZqBJJVTnI",
    authDomain: "slackify-me.firebaseapp.com",
    databaseURL: "https://slackify-me.firebaseio.com",
    projectId: "slackify-me",
    storageBucket: "slackify-me.appspot.com",
    messagingSenderId: "38882017878",
    appId: "1:38882017878:web:bd5fd214e0699696e331f7",
    measurementId: "G-HJN9D6PXRR"
};

const fireBaseApp = initializeApp(firebaseConfig);
const authenticator = auth();
const fireBaseProvider = new auth.GoogleAuthProvider();
const db = fireBaseApp.firestore();

export {authenticator, fireBaseProvider};

export default db;
