import * as pathfinder from "./pathfinderdb.js";
// import "./pathfinderdb.js";

// Ejemplo de escritura en la base de datos
// Establece datos en un nodo específico -- funciona
// var data = {
//   name: "Patrick",
//   stats: {
//     fue: 14,
//   },
// };
// pathfinder._data.insertCharacterData(data);

var data = {
  name: "Patrick",
  stats: {
    des: 12,
  },
};

let newdata = pathfinder._data.getCharacterData(data.name);

console.log(newdata);
// // Ejemplo de lectura de la base de datos
// pathfinder.DB.getDB()
//   .ref("characters")
//   .once("Patrick")
//   .then(function (snapshot) {
//     var result = snapshot.val();
//     console.log(result);
//   });
