import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCFHQ1K4ramHIZm3YO0amxkSUdaj-BCWdM",
  authDomain: "fca2024-c3438.firebaseapp.com",
  projectId: "fca2024-c3438",
  storageBucket: "fca2024-c3438.appspot.com",
  messagingSenderId: "968073024606",
  appId: "1:968073024606:web:d78c6bfeadb6a5cab8d0cf",
  measurementId: "G-DJMWE65CZF",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);


