import React, { Component } from "react";
import RandomPlanet from "../random-planet/random-planet";
import Header from "../header/header";
import "./app.css";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import {
  PersonList,
  StarshipList,
  PlanetList,
} from "../sw-components/item-lists";
import ErrorBoundry from "../error-boundry/ErrorBoundry";
import Row from "../row/row";
import PersonDetails from "../sw-components/person-details";
import PlanetDetails from "../sw-components/planet-details";
import StarshipDetails from "../sw-components/starship-details";
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
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
            <Row left={<PersonList />} right={<PersonDetails itemId={11} />} />
            <Row
              left={<StarshipList />}
              right={<StarshipDetails itemId={9} />}
            />
            <Row left={<PlanetList />} right={<PlanetDetails itemId={4} />} />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
