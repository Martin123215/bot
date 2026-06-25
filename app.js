import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "bots-9de8a.firebaseapp.com",
  projectId: "bots-9de8a",
  storageBucket: "bots-9de8a.firebasestorage.app",
  messagingSenderId: "830406173368",
  appId: "1:830406173368:web:cdaa7c75365dbcdeaa8a4d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.guardar = async () => {

  try {

    await addDoc(collection(db, "misiones"), {

      nombre: document.getElementById("nombre").value,

      descripcion: document.getElementById("descripcion").value,

      dia: document.getElementById("dia").value,

      hora: document.getElementById("hora").value,

      franja: document.getElementById("franja").value,

      requisito: document.getElementById("requisito").value,

      imagen: document.getElementById("imagen").value,

      fechaRegistro: new Date()

    });

    document.getElementById("estado").innerHTML =
      "✅ Misión guardada correctamente";

  } catch (error) {

    document.getElementById("estado").innerHTML =
      error.message;

  }

};
