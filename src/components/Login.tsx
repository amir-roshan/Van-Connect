// src/components/Login.tsx
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { signInWithRedirect } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../firebase";

const Login = () => {
  const handleGoogleSignIn = () => {
    signInWithRedirect(auth, googleProvider);
  };

  const handleFacebookSignIn = () => {
    signInWithRedirect(auth, facebookProvider);
  };

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Van Connect</h2>
        <div className="login-button google" onClick={handleGoogleSignIn}>
          <GoogleOutlined /> Sign In with Google
        </div>
        <br />
        <div className="login-button facebook" onClick={handleFacebookSignIn}>
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
