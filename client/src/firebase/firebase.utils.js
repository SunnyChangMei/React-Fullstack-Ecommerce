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

// this function will auto import items into firebase database
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef);
  const batch = firestore.batch();

  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
