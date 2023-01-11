import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();
  state = {
    planet: {
      image:
        "https://media.tenor.com/1s1_eaP6BvgAAAAi/rainbow-spinner-loading.gif",
    },
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet });
  };

  updatePlanet() {
    const id = 3;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }

  constructor(props) {
    super(props);
    this.updatePlanet();
  }

  render() {
    const {
      planet: { name, population, rotationPeriod, diameter, id, image },
    } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image" src={image} alt="planet image" />
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
