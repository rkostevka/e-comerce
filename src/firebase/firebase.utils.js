import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCZBGKzpclFryZOqCiK57VnoiZwzcXODNE",
    authDomain: "crwn-db-be332.firebaseapp.com",
    projectId: "crwn-db-be332",
    storageBucket: "crwn-db-be332.appspot.com",
    messagingSenderId: "534666228765",
    appId: "1:534666228765:web:e42f86b8bbebab3e80c2f4"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;