import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const buttonStyle = {
    position: "absolute",
    top: "0",
    right: "0",
    margin: "10px", // Add margin for spacing if needed
    padding: "5px 10px", // Add padding for button size
    background: "blue", // Change the background color as desired
    color: "white", // Change the text color as desired
    border: "none",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
