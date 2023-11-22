  // Configura Firebase con tus credenciales
  var firebaseConfig = {
    apiKey: "AIzaSyDBGJIICX3rsFL8_ysotcayXpJdm0Fvujg",
    authDomain: "ghpages-97675.firebaseapp.com",
    projectId: "ghpages-97675",
    storageBucket: "ghpages-97675.appspot.com",
    messagingSenderId: "835106149583",
    appId: "1:835106149583:web:1ff8a5bd984c1e4aa613ba",
    databaseURL: "https://ghpages-97675-default-rtdb.europe-west1.firebasedatabase.app"
  };

  // Inicializa Firebase
  firebase.initializeApp(firebaseConfig);

  // Obtiene una referencia a la base de datos
  var database = firebase.database();

  // Ejemplo de escritura en la base de datos
  var data = {
    Patrick: {
        stats: {
            fue : 14
        }
    }
  };

  // Establece datos en un nodo específico
  database.ref('characters').push(data);

  // Ejemplo de lectura de la base de datos
  database.ref('characters').once('Pattick').then(function(snapshot) {
    var result = snapshot.val();
    console.log(result);
  });

