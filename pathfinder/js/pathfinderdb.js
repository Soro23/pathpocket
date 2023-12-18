import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  set,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

export var _data = (function () {
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
  var pfdb = getDatabase();

  // ------ GET DATA ---------------//
  function getCharacterData(name) {
    get(child(ref(pfdb), "characters/" + name))
      .then((character) => {
        if (character.exists()) {
          return character.val();
        } else {
          alert("No data found");
        }
      })
      .catch((error) => {
        alert("Error: " + error);
        return { error: error };
      });
  }

  // ------ INSERT DATA ---------------//
  function insertCharacterData(data) {
    set(ref(pfdb, "characters/" + data.name), {
      name: data.name,
      stats: data.stats,
    })
      .then(() => {
        console.log("Inserted data on node" + data.name);
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  }

  // ------ UPDATE DATA ---------------//
  function updateCharacterData(data) {
    update(ref(pfdb, "characters/" + data.name), {
      stats: data.stats,
    })
      .then(() => {
        console.log("Updated data on node" + data.name);
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  }

  // ------ REMOVE DATA ---------------//
  function updateCharacterData(data) {
    remove(ref(pfdb, "characters/" + data.name))
      .then(() => {
        console.log("Removed data on node" + data.name);
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  }

  // externals
  return {
    getConfig: () => firebaseConfig,
    getDB: () => pfdb,
    insertCharacterData: (data) => {
      insertCharacterData(data);
    },
    updateCharacterData: (data) => {
      updateCharacterData(data);
    },
    getCharacterData: (name) => {
      var data = getCharacterData(name);
      console.log("iin");
      console.log(data);
      return data;
    },
  };
})();
