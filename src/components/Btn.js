import React from "react";
import { Button } from "@material-ui/core";
import { auth } from "../firebase";
import firebase from "firebase/compat/app";

const signInWithGoogle = async () => {
  // Retrieve Google provider object
  const provider = new firebase.auth.GoogleAuthProvider();
  // Set language to the default browser preference
  auth.useDeviceLanguage();
  // Start sign in process
  try {
    await auth.signInWithPopup(provider);
  } catch (error) {
    console.log(error.message);
  }
};

function Btn({ onClick = null, children = null }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Button
        onClick={signInWithGoogle}
        variant="contained"
        color="primary"
        style={{
          padding: "30px",
          fontSize: "20px",
          borderRadius: "3px",
          fontWeight: "600",
        }}
      >
        {children}
      </Button>
    </div>
  );
}

export default Btn;
