import React from "react";
import "./header.css";
const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="/">StarDB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="/">People</a>
        </li>
        <li>
          <a href="/">Planets</a>
        </li>
        <li>
          <a href="/">Starships</a>
        </li>
      </ul>
      <button onClick={onServiceChange} className="btn btn-primary btn-sm">
        Change service
      </button>
    </div>
  );
};

export default Header;
