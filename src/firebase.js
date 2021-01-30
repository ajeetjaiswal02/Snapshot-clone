import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDJKTZ2Tl2JyOpcO7gbrRfM52zpwh5q4q0",
    authDomain: "snapshot-clone-4913c.firebaseapp.com",
    projectId: "snapshot-clone-4913c",
    storageBucket: "snapshot-clone-4913c.appspot.com",
    messagingSenderId: "875611235722",
    appId: "1:875611235722:web:661bad2ba5c7fb19215473"
};


const firebaseapp = firebase.intializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoggleAuthProvider();

export {db, auth, storage, provider };
