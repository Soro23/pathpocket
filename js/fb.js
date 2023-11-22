import * as pathfinder from "./pathfinderdb.js";
import * as DBJs from "./DB.js";
// import "./pathfinderdb.js";

// Ejemplo de escritura en la base de datos
var data = {
  name: "Patrick",
  stats: {
    fue: 14,
  },
};

// Establece datos en un nodo específico
DBJs.DB.insertCharacterData(data);

var data = {
  name: "Patrick",
  stats: {
    des: 12,
  },
};


console.log(DBJs.DB.getCharacterData(data.name));
// // Ejemplo de lectura de la base de datos
// pathfinder.DB.getDB()
//   .ref("characters")
//   .once("Patrick")
//   .then(function (snapshot) {
//     var result = snapshot.val();
//     console.log(result);
//   });
