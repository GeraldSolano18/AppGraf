import * as firebase from 'firebase/app';
import 'firebase/auth';

export const app = firebase.initializeApp({
  apiKey: "AIzaSyCk8ZHY1aFPjByiYUdofvULi4V1wXnbCa4",
  authDomain: "fir-react-auth-2cb01.firebaseapp.com",
  databaseURL: "https://fir-react-auth-2cb01.firebaseio.com",
  projectId: "fir-react-auth-2cb01",
  storageBucket: "fir-react-auth-2cb01.appspot.com",
  messagingSenderId: "1062905808546",
  appId: "1:1062905808546:web:4093949e4fb0a1a30239fb",
  measurementId: "G-LB22PSWFBG",
});

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
