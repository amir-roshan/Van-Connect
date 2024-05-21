import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq2tv3K0x8ZbC-MR-8w8yC6ouPqiMZzGY",
  authDomain: "van-connect-34b1a.firebaseapp.com",
  projectId: "van-connect-34b1a",
  storageBucket: "van-connect-34b1a.appspot.com",
  messagingSenderId: "773509840251",
  appId: "1:773509840251:web:48625fb28fb731953cd1de",
  measurementId: "G-53REWBY7YN",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
