import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'API_KEY',
  authDomain: 'DOMAIN',
  databaseURL: 'DB_URL',
  projectId: 'sightseeing-guide',
  storageBucket: 'STORAGE_BUCKET',
  appId: 'APP_ID'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
