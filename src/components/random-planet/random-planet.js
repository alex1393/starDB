import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
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
    const { planet, loading } = this.state;
    const planetBody = loading ? <Spinner /> : <PlanetView planet={planet} />;

    return <div className="random-planet jumbotron rounded">{planetBody}</div>;
  }
}

const PlanetView = ({ planet }) => {
  const { name, population, rotationPeriod, diameter, id } = planet;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
