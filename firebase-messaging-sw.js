import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDjR8b_DUOKhvd9CP2ymeFdJ2k_EYD0ua0",
    authDomain: "free-checklist-app.firebaseapp.com",
    projectId: "free-checklist-app",
    storageBucket: "free-checklist-app.appspot.com",
    messagingSenderId: "43846520306",
    appId: "1:43846520306:web:ecca6466a9573f4145ef6b",
    measurementId: "G-2M1TMN1DDH",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);


