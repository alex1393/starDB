import React from "react";
import { Navigate } from "react-router-dom";

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h3>Thi page is full of secrets!!!</h3>
      </div>
    );
  }
  return <Navigate replace to="/login/" />;
};

export default SecretPage;
