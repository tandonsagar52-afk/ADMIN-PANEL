// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbQrQ_h4D_mZbnuh58o-7BZR-zCFesXPU",
  authDomain: "sagar-960bb.firebaseapp.com",
  databaseURL: "https://sagar-960bb-default-rtdb.firebaseio.com",
  projectId: "sagar-960bb",
  storageBucket: "sagar-960bb.firebasestorage.app",
  messagingSenderId: "193117575393",
  appId: "1:193117575393:web:6b1757a479767984ff7fa0",
  measurementId: "G-SZ1REQHN8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };