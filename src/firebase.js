import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBpb71579TaorJmIa4na28CSti45Nj-hkw",
  authDomain: "sri-vivekananda-b781c.firebaseapp.com",
  projectId: "sri-vivekananda-b781c",
  storageBucket: "sri-vivekananda-b781c.appspot.com",
  messagingSenderId: "1067610833034",
  appId: "1:1067610833034:web:98d033cf58ad3c68d2ed73",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();

const fb = firebase;

export { storage, fb as default };
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
