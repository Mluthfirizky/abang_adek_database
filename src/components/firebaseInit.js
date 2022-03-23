import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import firebaseConfig from "./firebaseConfig"

const app = firebase.initializeApp(firebaseConfig);

export default  app.firestore()