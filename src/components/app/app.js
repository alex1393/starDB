import React, { Component } from "react";
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
import DummySwapiService from "../../services/dummy-swapi-service";
import RandomPlanet from "../random-planet/random-planet";
export default class App extends Component {
  state = {
    shadowRandowPlanet: true,
    swapiService: new SwapiService(),
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return { swapiService: new Service() };
    });
  };

  render() {
    const planet = this.state.shadowRandowPlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />
            {planet}
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
