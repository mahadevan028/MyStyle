import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCUb7rrpKc0_-VTkRThJofVXyEpI1MFpuU",
    authDomain: "mystyle-db-27406.firebaseapp.com",
    projectId: "mystyle-db-27406",
    storageBucket: "mystyle-db-27406.appspot.com",
    messagingSenderId: "285025389621",
    appId: "1:285025389621:web:d38cc8fd711259fe7ff57c",
    measurementId: "G-M4749G6VN0"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
//   export const firestore = firebase.firestore();

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    'prompt': 'select_account'
  });

  export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider)

  export default firebase;