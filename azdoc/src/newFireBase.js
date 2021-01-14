import firebase from "firebase";

var newfirebaseApp = firebase.initializeApp({
// Your web app's Firebase configuration
apiKey: "AIzaSyA3l3XVAjU2St-gBBd9u4REUFYVqOmVPiI",
authDomain: "amalitech-visitor-form.firebaseapp.com",
// databaseURL: "https://amalitech-visitor-form-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "amalitech-visitor-form",
storageBucket: "amalitech-visitor-form.appspot.com",
messagingSenderId: "112111176585",
appId: "1:112111176585:web:c0a544518bcb2a0f032f58"
});
// Initialize Firebase
var db = newfirebaseApp.firestore();

export {db} ;
