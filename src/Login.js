import React from "react";
import { auth, provider } from "./firebase/firebase";
import './Login.css';

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <div>
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">React Performance</h1>
          <span>Please login to share your thoughts.</span>
          <button onClick={signIn} className="login-button">
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
