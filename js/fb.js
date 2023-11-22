import * as pathfinder from "./pathfinderdb.js";
// import "./pathfinderdb.js";

// Inicializa Firebase
firebase.initializeApp(pathfinder.DB.getDB);

// Ejemplo de escritura en la base de datos
var data = {
  Patrick: {
    stats: {
      fue: 16,
    },
  },
};

// Establece datos en un nodo específico
pathfinder.DB.getDB.ref("characters").push(data);

// Ejemplo de lectura de la base de datos
pathfinder.DB.getDB
  .ref("characters")
  .once("Patrick")
  .then(function (snapshot) {
    var result = snapshot.val();
    console.log(result);
  });

