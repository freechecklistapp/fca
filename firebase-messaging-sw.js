<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDjR8b_DUOKhvd9CP2ymeFdJ2k_EYD0ua0",
    authDomain: "free-checklist-app.firebaseapp.com",
    projectId: "free-checklist-app",
    storageBucket: "free-checklist-app.appspot.com",
    messagingSenderId: "43846520306",
    appId: "1:43846520306:web:ecca6466a9573f4145ef6b",
    measurementId: "G-2M1TMN1DDH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>


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


