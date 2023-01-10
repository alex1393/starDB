import React, { Component } from "react";

export default class PersonDetails extends Component {
  render() {
    return (
      <div className="person-details card">
        <img
          src="https://preview.free3d.com/img/2015/11/1851631620906288951/5ctg0dh9-900.jpg"
          alt="person image"
          className="person-image"
        />
        <div className="card-body">
          <h4>R2-D2</h4>
          <ul className="list-group list-group-flash">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>male</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye color</span>
              <span>red</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
