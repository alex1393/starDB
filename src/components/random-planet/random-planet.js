import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();
  state = {
    id: 1,
    name: "Loading",
    population: "Loading",
    rotationPeriod: "Loading",
    diameter: "Loading",
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 19) + 2;
    this.swapiService.getPlanet(id).then((planet) => {
      this.setState({
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
      });
    });
  }

  constructor(props) {
    super(props);
    this.updatePlanet();
  }

  render() {
    const { name, population, rotationPeriod, diameter, id } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="planet image"
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population: </span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period: </span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter: </span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
