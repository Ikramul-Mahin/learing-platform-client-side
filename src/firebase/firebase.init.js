// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFAQaxzY6dEJ-njUtFZ9rwlHrm2pWN2fg",
    authDomain: "practice-all-task.firebaseapp.com",
    projectId: "practice-all-task",
    storageBucket: "practice-all-task.appspot.com",
    messagingSenderId: "429065205230",
    appId: "1:429065205230:web:8c247f501f5f64cca30aff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app