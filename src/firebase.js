import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpp24v8IzAz_KZxIz2cnewSIQd3yGR-N4",
  authDomain: "disneyplus-clone-db822.firebaseapp.com",
  projectId: "disneyplus-clone-db822",
  storageBucket: "disneyplus-clone-db822.appspot.com",
  messagingSenderId: "979393748821",
  appId: "1:979393748821:web:794ecdf4a01c864c5e99dc",
  measurementId: "G-ZM6XF0D8D7"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
