import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({	
    apiKey: 'AIzaSyAL5NRObfyDaXCjiY_OevWpWpzn0ifktS8',
    authDomain: 'catch-of-the-day-rahul-43457.firebaseapp.com',
    databaseURL: 'https://catch-of-the-day-rahul-43457.firebaseio.com',
    projectId: 'catch-of-the-day-rahul-43457',
    storageBucket: 'catch-of-the-day-rahul-43457.appspot.com',
    messagingSenderId: '871764217570',
    appId: '1:871764217570:web:7ca150429f4c4c869f18bb',
    measurementId: 'G-ZGM76K1YZF',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;