import firebase from "firebase/compat/app";
import "firebase/compat/database";
import AddEdit from "./pages/AddEdit";
import { initializeApp } from "firebase/app";
var firebaseConfig = {
  apiKey: "AIzaSyD_KXZQqOuIRNviI8dx_rE651YWFbNmOzw",
  authDomain: "fir-mini-4019e.firebaseapp.com",
  projectId: "fir-mini-4019e",
  storageBucket: "fir-mini-4019e.appspot.com",
  messagingSenderId: "782961569105",
  appId: "1:782961569105:web:3de982cb5fe1f8e001b770"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();