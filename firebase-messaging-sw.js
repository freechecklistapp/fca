// Load Firebase SDKs
importScripts('https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.1/firebase-messaging.js');

// Initialize Firebase app
firebase.initializeApp({
  apiKey: "AIzaSyDjR8b_DUOKhvd9CP2ymeFdJ2k_EYD0ua0",
  authDomain: "free-checklist-app.firebaseapp.com",
  projectId: "free-checklist-app",
  storageBucket: "free-checklist-app.appspot.com",
  messagingSenderId: "43846520306",
  appId: "1:43846520306:web:ecca6466a9573f4145ef6b",
  measurementId: "G-2M1TMN1DDH"
});

// Retrieve Firebase Messaging instance
const messaging = firebase.messaging();

// Retrieve registration token
messaging.getToken({ vapidKey: 'YOUR_VAPID_KEY' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    console.log('Registration token:', currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.error('An error occurred while retrieving token:', err);
});
