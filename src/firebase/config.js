import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBl46kJ2buDiVRe1jbv94P7nHVQROI4NUQ",
  authDomain: "cooking-ninja-site-6b9d1.firebaseapp.com",
  projectId: "cooking-ninja-site-6b9d1",
  storageBucket: "cooking-ninja-site-6b9d1.appspot.com",
  messagingSenderId: "385591906182",
  appId: "1:385591906182:web:acf71928175b2cbd45e607",
}

//initialize firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export { projectFirestore }
