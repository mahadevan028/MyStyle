import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUb7rrpKc0_-VTkRThJofVXyEpI1MFpuU",
    authDomain: "mystyle-db-27406.firebaseapp.com",
    projectId: "mystyle-db-27406",
    storageBucket: "mystyle-db-27406.appspot.com",
    messagingSenderId: "285025389621",
    appId: "1:285025389621:web:d38cc8fd711259fe7ff57c",
    measurementId: "G-M4749G6VN0"
  }; 

   export const createUserProfileDocument = async (userAuth, additionalData) => {
          if(!userAuth)
          return;

          const userRef = firestore.doc(`users/${userAuth.uid}`)
          const snapshot = await userRef.get();

          if(!snapshot.exists){
            const {displayName, email} = userAuth;
            const createTime = new Date();

            try{
               await userRef.set({
                 displayName:displayName,
                 email: email,
                 createTime: createTime,
                 ...additionalData
               })
            }catch(error){
                console.log("Error creating user",error.message)
            }
          }
              return userRef;
   }


  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
 

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    'prompt': 'select_account'
  });

  export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider)

  export default firebase;