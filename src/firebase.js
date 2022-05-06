
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBFFJvD6iikZ_9aaYPgRG42dRD3MECY9u4",
  authDomain: "react-2022-fe994.firebaseapp.com",
  projectId: "react-2022-fe994",
  storageBucket: "react-2022-fe994.appspot.com",
  messagingSenderId: "493758908562",
  appId: "1:493758908562:web:4acba89836ef022e747e4b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth };