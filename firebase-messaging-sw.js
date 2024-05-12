importScripts('https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyDjR8b_DUOKhvd9CP2ymeFdJ2k_EYD0ua0",
  authDomain: "free-checklist-app.firebaseapp.com",
  projectId: "free-checklist-app",
  storageBucket: "free-checklist-app.appspot.com",
  messagingSenderId: "43846520306",
  appId: "1:43846520306:web:ecca6466a9573f4145ef6b",
  measurementId: "G-2M1TMN1DDH"
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages
const messaging = firebase.messaging();

// Add an event listener to handle background messages
self.addEventListener('push', function(event) {
  const payload = event.data.json();
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
    // You can add more options as needed
  };

  // Show the notification
  event.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
});


