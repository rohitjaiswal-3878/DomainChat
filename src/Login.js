import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2076/2076218.png"
          alt=""
        />
        <h1>Sign in to Domain Chat</h1>
        <p>domainchat.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
