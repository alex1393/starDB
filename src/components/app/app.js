import React, { Component } from "react";
import Header from "../header/header";
import "./app.css";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import ErrorBoundry from "../error-boundry/ErrorBoundry";
import DummySwapiService from "../../services/dummy-swapi-service";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planets-page";
import StarshipPage from "../pages/starships-page";
export default class App extends Component {
  state = {
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
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <PeoplePage />
            <PlanetPage />
            <StarshipPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
