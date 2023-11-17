// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbyWZOo8HpqCYTUZqbFOxzjZYckGdkyao",
  authDomain: "clone-148b9.firebaseapp.com",
  projectId: "clone-148b9",
  storageBucket: "clone-148b9.appspot.com",
  messagingSenderId: "330981892928",
  appId: "1:330981892928:web:39f72c71f75b47da7410a5",
  measurementId: "G-3T6D659GR2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
// const analytics = getAnalytics(app);
