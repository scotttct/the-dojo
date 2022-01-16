import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB2C3mXcWjydGR81Fhi2S2uwORT-_CB3C8",
  authDomain: "project-manage-3da8c.firebaseapp.com",
  projectId: "project-manage-3da8c",
  storageBucket: "project-manage-3da8c.appspot.com",
  messagingSenderId: "120187619501",
  appId: "1:120187619501:web:0b625ff5d5145724759e24"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }