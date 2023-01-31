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
import Row from "../row/row";
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
          <Row
            left={<PersonList>{({ name }) => <span>{name}</span>}</PersonList>}
            right={1}
          />
          <Row
            left={
              <StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>
            }
            right={2}
          />
          <Row
            left={<PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>}
            right={3}
          />
        </div>
      </ErrorBoundry>
    );
  }
}
