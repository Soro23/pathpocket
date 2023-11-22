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
  firebase.initializeApp(firebaseConfig);
  var pfdb = firebase.database();

  function writeCharacterData(data) {
    if(data.hasOwnProperty('name')){
      // set(ref(pfdb, "characters/" + data.name), data);
      pathfinder.DB.getDB.ref("characters").push(data);
      
    }else{
      console.log('Error pushing data');
      console.log(data);
    }
  }

  // externals
  return {
    getConfig: function () {
      return firebaseConfig;
    },
    getDB: function () {
      return pfdb;
    },
  };
})();
