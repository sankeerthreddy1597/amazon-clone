import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHxj4rixe_pUQ5IRqi6OYcHeehp1JvaYc",
    authDomain: "challenge-6688e.firebaseapp.com",
    projectId: "challenge-6688e",
    storageBucket: "challenge-6688e.appspot.com",
    messagingSenderId: "518418708920",
    appId: "1:518418708920:web:710b857c422323fd50f74d",
    measurementId: "G-496F0HXEXS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};