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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StarshipDetails from "../sw-components/starship-details";
import PlanetDetails from "../sw-components/planet-details";
import PersonDetails from "../sw-components/person-details";
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
          <BrowserRouter>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Routes>
                <Route path={"/"} element={<h2>Welcome go StarDB</h2>} />
                <Route path={"/people"} element={<PeoplePage />} />
                <Route path={"/people/:id"} element={<PersonDetails />} />
                <Route path={"/planets"} element={<PlanetPage />} />
                <Route path={"/planets/:id"} element={<PlanetDetails />} />
                <Route path={"/starships"} element={<StarshipPage />} />
                <Route path={"/starships/:id"} element={<StarshipDetails />} />
              </Routes>
            </div>
          </BrowserRouter>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
