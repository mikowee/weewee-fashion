import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDlUSeiot4Gvgve4DHZU9PlCpYFtfmP65M",
  authDomain: "weewee-db.firebaseapp.com",
  databaseURL: "https://weewee-db.firebaseio.com",
  projectId: "weewee-db",
  storageBucket: "weewee-db.appspot.com",
  messagingSenderId: "810470404446",
  appId: "1:810470404446:web:eede27f1367af49bfd1fcf"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
