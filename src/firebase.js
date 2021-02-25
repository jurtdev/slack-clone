import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA1NTYsdxXjSupei3mqqXDDFkmZu3sDoKI',
  authDomain: 'slack-clone-88bf2.firebaseapp.com',
  projectId: 'slack-clone-88bf2',
  storageBucket: 'slack-clone-88bf2.appspot.com',
  messagingSenderId: '842900248546',
  appId: '1:842900248546:web:98c6a51d8943d291b94bbb',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
