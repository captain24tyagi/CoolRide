import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC1_2OplQVIhkxOAQv60CdBJ3nTZfxr3vw",
    authDomain: "coolride-aa07f.firebaseapp.com",
    projectId: "coolride-aa07f",
    storageBucket: "coolride-aa07f.appspot.com",
    messagingSenderId: "260364056302",
    appId: "1:260364056302:web:b4ceb93ac950d3e3fe65ff",
    measurementId: "G-VN6RJWTFW5"
  });

const db = firebaseApp.firestore();

export default db;