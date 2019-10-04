import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBK3LWo_RlHJj5i6yhMCYU7DWrzkFOJ-oY',
  authDomain: 'fullstack-react-864cb.firebaseapp.com',
  databaseURL: 'https://fullstack-react-864cb.firebaseio.com',
  projectId: 'fullstack-react-864cb',
  storageBucket: '',
  messagingSenderId: '308531371248',
  appId: '1:308531371248:web:87b235ad47fbb268a3f635',
  measurementId: 'G-22J3T8Z9VP'
};

firebase.initializeApp(config);


//create snapShot for new user to firestore database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // get userRef for firestore userAuth
  const snapShot = await userRef.get();

// check if there is any user data exists, if not, use set.() to create new user with new Date()
  if (snapShot.exists === false) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
