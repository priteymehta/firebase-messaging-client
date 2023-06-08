importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize Firebase app in the service worker
firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
});

// Retrieve Firebase Messaging object
const messaging = firebase.messaging();

// Handle background notifications
messaging.setBackgroundMessageHandler(function (payload) {
  console.log('Background message received:', payload);
  
  // Customize the notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/path/to/icon.png'
  };
  
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
