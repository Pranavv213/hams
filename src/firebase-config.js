
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgs7LcsP1CjOawT0Ec-jx0S1kqBD1am7k",
  authDomain: "robitcoin-578be.firebaseapp.com",
  projectId: "robitcoin-578be",
  storageBucket: "robitcoin-578be.appspot.com",
  messagingSenderId: "218644863350",
  appId: "1:218644863350:web:e40c871f7ff80d99a34257",
  measurementId: "G-E3P72NYNC9"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      console.log(profilePic);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      window.location.reload();


    })
    .catch((error) => {
      console.log(error);
    })
}