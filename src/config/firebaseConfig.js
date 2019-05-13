import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCgyxuYa3vpK1b87Jrv-uzm_DGTreEBtwE",
  authDomain: "sightseeing-guide.firebaseapp.com",
  databaseURL: "https://sightseeing-guide.firebaseio.com",
  projectId: "sightseeing-guide",
  storageBucket: "sightseeing-guide.appspot.com",
  messagingSenderId: "127557907156",
  appId: "1:127557907156:web:a2447e40773e4ee0"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
