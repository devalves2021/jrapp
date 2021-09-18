import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyDYZtKqva1-oPLIweydlSV-v4hxt-46fko",
    authDomain: "jrapp-53413.firebaseapp.com",
    projectId: "jrapp-53413",
    storageBucket: "jrapp-53413.appspot.com",
    messagingSenderId: "140382431185",
    appId: "1:140382431185:web:bb9196f15562d9e4fc22f0",
    measurementId: "G-KYYTLQLRML"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
