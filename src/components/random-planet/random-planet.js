import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import PropTypes from "prop-types";

export default class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 5000,
  };

  static propTypes = {
    updateInterval: PropTypes.number,
  };

  swapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };
  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };
  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 3);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { planet, loading, error } = this.state;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content =
      loading === false && error === false ? (
        <PlanetView planet={planet} />
      ) : null;

    return (
      <div className="random-planet jumbotron rounded col-md-6">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { name, population, rotationPeriod, diameter, id } = planet;
  const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

  const checkPicture = (e) => {
    e.target.onerror = null;
    e.target.src = "https://sipr.mojokertokab.go.id/images/avatar/no-image.jpg";
  };

  return (
    <React.Fragment>
      <img
        alt="planet"
        className="planet-image"
        src={imageUrl}
        onError={(e) => {
          checkPicture(e);
        }}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
