import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBQTSgiSFp5WjSwAgEIn-kToWxCFeitcHc",
    authDomain: "abigo-react.firebaseapp.com",
    databaseURL: "https://abigo-react.firebaseio.com",
    projectId: "abigo-react",
    storageBucket: "abigo-react.appspot.com",
    messagingSenderId: "124239937736"
  };
  firebase.initializeApp(config);
  firebase.firestore().enablePersistence()
export default firebase;