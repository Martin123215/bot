import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
 getFirestore,
 collection,
 addDoc
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

 apiKey: "TU_API_KEY",
 authDomain: "TU_PROYECTO.firebaseapp.com",
 projectId: "TU_PROYECTO",

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

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