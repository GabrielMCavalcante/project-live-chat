import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA6wGa4hvkPYoSohyjXmcLknmyFD2v1ifw",
    authDomain: "vuejs-project-live-chat.firebaseapp.com",
    databaseURL: "https://vuejs-project-live-chat.firebaseio.com",
    projectId: "vuejs-project-live-chat",
    storageBucket: "vuejs-project-live-chat.appspot.com",
    messagingSenderId: "471652733379",
    appId: "1:471652733379:web:0440c4b60a2e7bca07ed76"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();