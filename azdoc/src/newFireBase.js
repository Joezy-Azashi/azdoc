import firebase from "firebase";

var newfirebaseApp = firebase.initializeApp({
// Your web app's Firebase configuration

apiKey: "AIzaSyAc-7Gg1D70ACA1bJsWTrjFwVKr-jPFdLE",
authDomain: "azdoc-2ab7a.firebaseapp.com",
databaseURL: "https://azdoc-2ab7a-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "azdoc-2ab7a",
storageBucket: "azdoc-2ab7a.appspot.com",
messagingSenderId: "370533303287",
appId: "1:370533303287:web:5441acdc6f813e2fa664f2"

});
// Initialize Firebase
var db = newfirebaseApp.firestore();

export { db };
