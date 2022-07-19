import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHoklse-DB9DxJKO7Eq-D00natae4xNTk",
  authDomain: "my-burger-app-82179.firebaseapp.com",
  projectId: "my-burger-app-82179",
  storageBucket: "my-burger-app-82179.appspot.com",
  messagingSenderId: "706747623179",
  appId: "1:706747623179:web:17e799f3736d044b37e40e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
