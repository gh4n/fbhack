import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "",
  authDomain: "facebook-hack-1525489263960.firebaseapp.com",
  databaseURL: "https://facebook-hack-1525489263960.firebaseio.com",
  projectId: "facebook-hack-1525489263960",
  storageBucket: "facebook-hack-1525489263960.appspot.com",
  messagingSenderId: "668470610468"
};

const devConfig = {
  apiKey: "c",
  authDomain: "facebook-hack-1525489263960.firebaseapp.com",
  databaseURL: "https://facebook-hack-1525489263960.firebaseio.com",
  projectId: "facebook-hack-1525489263960",
  storageBucket: "facebook-hack-1525489263960.appspot.com",
  messagingSenderId: "668470610468"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
