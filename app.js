
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBNUliZKR_sIwIbBruXqRM8rkOmMEMYeKY",
    authDomain: "aureal-3a2b1.firebaseapp.com",
    databaseURL: "https://aureal-3a2b1.firebaseio.com",
    projectId: "aureal-3a2b1",
    storageBucket: "aureal-3a2b1.appspot.com",
    messagingSenderId: "206317282199",
    appId: "1:206317282199:web:0b718d329a90d29a03dad2",
    measurementId: "G-YKEWT1LEH0"
  };
  firebase.initializeApp(config);
  
  const messaging = firebase.messaging();
  messaging.requestPermission().then(function() {
     //getToken(messaging);
     return messaging.getToken();
  }).then(function(token){
  console.log(token);
  })
.catch(function(err) {
  console.log('Permission denied', err);
});


messaging.onMessage(function(payload){
console.log('onMessage: ',payload);
});
