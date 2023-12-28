import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDNySOwvbBqW81WFM80pQi7_VMsbBhywOA",
  authDomain: "agent-d2de9.firebaseapp.com",
  projectId: "agent-d2de9",
  storageBucket: "agent-d2de9.appspot.com",
  messagingSenderId: "544439180854",
  appId: "1:544439180854:web:be26b3c0c67c3cfa0f4297",
  measurementId: "G-D0M5V1QJE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export { app, auth };