import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC_h8d0BpRJpUDtJkzjzw3Oc38egyAnN88",
  authDomain: "catch-of-the-day-jdizzle.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jdizzle.firebaseio.com"
  });

  const base = Rebase.createClass(firebaseApp.database());

  // This is a named export
  export { firebaseApp };

  // this is a default export
  export default base;
