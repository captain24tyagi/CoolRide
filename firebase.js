import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey:process.env.NEXT_PUBLIC_APIKEY,
    authDomain:process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId:process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket:process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId:process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
    appId:process.env.NEXT_PUBLIC_APPID,
    measurementId:process.env.NEXT_PUBLIC_MEASUREMENTID 
  });

const db = firebaseApp.firestore();

export default db;