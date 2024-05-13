// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDjR8b_DUOKhvd9CP2ymeFdJ2k_EYD0ua0",
  authDomain: "free-checklist-app.firebaseapp.com",
  projectId: "free-checklist-app",
  storageBucket: "free-checklist-app.appspot.com",
  messagingSenderId: "43846520306",
  appId: "1:43846520306:web:ecca6466a9573f4145ef6b",
  measurementId: "G-2M1TMN1DDH",
});

  
