import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB2ZTEV1_7FkGsaIvIaG99nQLTCuo6ZYbQ",
  authDomain: "azdoc-233.firebaseapp.com",
  databaseURL: "https://azdoc-233-default-rtdb.firebaseio.com",
  projectId: "azdoc-233",
  storageBucket: "azdoc-233.appspot.com",
  messagingSenderId: "468241785977",
  appId: "1:468241785977:web:1a492948d9448bf4d1a0a8"
});

var db = firebaseApp.firestore();

export { db };