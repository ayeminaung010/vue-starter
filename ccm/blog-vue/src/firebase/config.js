import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBnN8f0YVAGB0OwhEejONh8hFSw09j5NnA",
    authDomain: "vue-blog-system-98af4.firebaseapp.com",
    projectId: "vue-blog-system-98af4",
    storageBucket: "vue-blog-system-98af4.appspot.com",
    messagingSenderId: "502945559178",
    appId: "1:502945559178:web:43746da035fa94f3c4b373"
  };

//   init firebase
const app = initializeApp(firebaseConfig);

//  database setup
const db=getFirestore(app);

export { db };