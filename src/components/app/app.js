import React, { Component } from "react";
import RandomPlanet from "../random-planet/random-planet";
import Header from "../header/header";
import "./app.css";
import SwapiService from "../../services/swapi-service";
import {
  PersonList,
  StarshipList,
  PlanetList,
} from "../sw-components/item-lists";
import ErrorBoundry from "../error-boundry/ErrorBoundry";
export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
  };
  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <PersonList>{({ name }) => <span>{name}</span>}</PersonList>
          <StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>
          <PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>
        </div>
      </ErrorBoundry>
    );
  }
}
