import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCOP_YhakzvkBcdeJFVsv7eexUScRAruwc",
    authDomain: "clone-88808.firebaseapp.com",
    projectId: "clone-88808",
    storageBucket: "clone-88808.appspot.com",
    messagingSenderId: "390387158652",
    appId: "1:390387158652:web:7a83ef231f10ce00df83f9",
    measurementId: "G-RC4HS4F6VG"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export{db,auth};