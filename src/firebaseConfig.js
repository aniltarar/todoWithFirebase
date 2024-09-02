import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuTOjGUrNxvTyDl-sTBnNHNQ3q1yCgOOc",
  authDomain: "react-redux-toolkit-fire-301f2.firebaseapp.com",
  projectId: "react-redux-toolkit-fire-301f2",
  storageBucket: "react-redux-toolkit-fire-301f2.appspot.com",
  messagingSenderId: "851880087229",
  appId: "1:851880087229:web:54fd300ae8bd6929f1b1d4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };   