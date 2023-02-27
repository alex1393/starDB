import React from "react";
import { Navigate } from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) {
    return <Navigate replace to="/" />;
  }
  return (
    <div className="jumbotron">
      <p>Loggin to see secret page!</p>
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
