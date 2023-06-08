// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDgKCG8MJdsC8rdYiQ20P6ya1uNwQd_iGg",
    authDomain: "ftp-node-service.firebaseapp.com",
    databaseURL: "https://ftp-node-service-default-rtdb.firebaseio.com",
    projectId: "ftp-node-service",
    storageBucket: "ftp-node-service.appspot.com",
    messagingSenderId: "308714175855",
    appId: "1:308714175855:web:1f935ca3bfa1c3206bfc9a",
    measurementId: "G-5BQGZS2S8C"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Retrieve Firebase Messaging object.
  const messaging = firebase.messaging();
  
  // Request permission for receiving notifications
  messaging.requestPermission()
    .then(function () {
      console.log('Notification permission granted.');
  
      // Get the device token
      messaging.getToken()
        .then(function (token) {
          console.log('Device token:', token);
          
          // Send the token to your server to associate it with the user
          // Your server can use this token to send notifications to the device
          // You can also save the token in your database for future use
        })
        .catch(function (err) {
          console.log('Error retrieving device token:', err);
        });
    })
    .catch(function (err) {
      console.log('Unable to get permission to notify:', err);
    });
  
  // Handle incoming messages
  messaging.onMessage(function (payload) {
    console.log('Received message:', payload);
    
    // Handle the received message here
    // You can show a notification or perform other actions based on the message content
  });
  