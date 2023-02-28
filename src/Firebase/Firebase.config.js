// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoFMizCmm_shyFPlqdF5JxkQ3YGkmCGDQ",
  authDomain: "new-task-kreedy.firebaseapp.com",
  projectId: "new-task-kreedy",
  storageBucket: "new-task-kreedy.appspot.com",
  messagingSenderId: "991900777509",
  appId: "1:991900777509:web:c52fdade2564f8aa4b53cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app