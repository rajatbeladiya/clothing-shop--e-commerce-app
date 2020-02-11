import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA-q7FOW0CNe4LcebfeHrs_dGlKLt9k6cI',
  authDomain: 'clothing-app-304a3.firebaseapp.com',
  databaseURL: 'https://clothing-app-304a3.firebaseio.com',
  projectId: 'clothing-app-304a3',
  storageBucket: 'clothing-app-304a3.appspot.com',
  messagingSenderId: '116173649204',
  appId: '1:116173649204:web:dedd04604ad41b783ce161',
  measurementId: 'G-8DQWGKQE4Q',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
