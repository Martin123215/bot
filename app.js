import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
 getFirestore,
 collection,
 addDoc
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkqZfjuT4yBPAKKU5f1eXlqEW7-zeg1GE",
  authDomain: "bots-9de8a.firebaseapp.com",
  projectId: "bots-9de8a",
  storageBucket: "bots-9de8a.firebasestorage.app",
  messagingSenderId: "830406173368",
  appId: "1:830406173368:web:cdaa7c75365dbcdeaa8a4d",
  measurementId: "G-BD322NC94J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

window.guardar = async () => {

 try{

   await addDoc(
     collection(db,"misiones"),
     {
       nombre:
       document.getElementById("nombre").value,

       descripcion:
       document.getElementById("descripcion").value,

       hora:
       document.getElementById("hora").value,

       imagen:
       document.getElementById("imagen").value,

       fecha:
       new Date()
     }
   );

   document.getElementById("estado").innerHTML =
   "✅ Misión guardada";

 }catch(error){

   document.getElementById("estado").innerHTML =
   error.message;

 }

}