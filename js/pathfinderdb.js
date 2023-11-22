import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, set, child, update, remove } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
export var DB = (function () {

  var firebaseConfig = {
    apiKey: "AIzaSyDBGJIICX3rsFL8_ysotcayXpJdm0Fvujg",
    authDomain: "ghpages-97675.firebaseapp.com",
    projectId: "ghpages-97675",
    storageBucket: "ghpages-97675.appspot.com",
    messagingSenderId: "835106149583",
    appId: "1:835106149583:web:1ff8a5bd984c1e4aa613ba",
    databaseURL:
      "https://ghpages-97675-default-rtdb.europe-west1.firebasedatabase.app",
  };
  var firebase = initializeApp(firebaseConfig);
  var pfdb = firebase.database();

  function writeCharacterData(data) {
    if(data.hasOwnProperty('name')){
      pfdb.ref("characters/" + data.name).set(data);
      // pfdb.ref("characters/" + data.name).push(data);
      console.log(data);
    }else{
      console.log('Error pushing data');
      console.log(data);
    }
  }

  // externals
  return {
    getConfig: () => firebaseConfig,
    getDB: () => pfdb,
    writeCharacterData: (data) => {
      writeCharacterData(data);
    }
  };
})();
