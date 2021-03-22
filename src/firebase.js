import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCreIDRcKM8_9pzjJfWSYy0Fw3qwSs9ypI",
  authDomain: "slack-clone-challenge-2763f.firebaseapp.com",
  projectId: "slack-clone-challenge-2763f",
  storageBucket: "slack-clone-challenge-2763f.appspot.com",
  messagingSenderId: "666877618490",
  appId: "1:666877618490:web:9dcab20cf742cf0eb8c803"
};

const firebaseApp  = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// firestore is database

 
export {auth, provider}
export default db;
