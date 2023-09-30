// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import * as firebase from 'firebase/compat/app'
// import 'firebase/storage'
// import 'firebase/firestore'
// import firebase from 'firebase/compat/app'
import firebase from 'firebase/compat/app'
import storage from 'firebase/compat'
import firestore from 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCRWASi3BuMasxbyegWSGGxlkL_SI-xryM",
    authDomain: "chatapp-303d0.firebaseapp.com",
    projectId: "chatapp-303d0",
    storageBucket: "chatapp-303d0.appspot.com",
    messagingSenderId: "1001056882775",
    appId: "1:1001056882775:web:a23771013225d364971312",
    measurementId: "G-XF25198WDY"
  };
//   Initialize firebase
firebase.initializeApp(firebaseConfig)

const projectStorage=firebase.storage()
const projectFirestore=firebase.firestore()
const timestamp=firebase.firestore.FieldValue.serverTimestamp

export{projectStorage,projectFirestore,timestamp}