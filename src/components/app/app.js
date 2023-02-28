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
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PersonDetails from "../sw-components/person-details";
import LoginPage from "../pages/login-page";
import SecretPage from "../pages/secret-page";
export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return { swapiService: new Service() };
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <BrowserRouter>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Routes>
                <Route path={"/"} element={<h2>Welcome go StarDB</h2>} />
                <Route path={"/people/:id"} element={<PersonDetails />} />
                <Route path={"/people"} element={<PeoplePage />} />
                <Route path={"/planets"} element={<PlanetPage />} />
                <Route path={"/planets/:id"} element={<PlanetPage />} />
                <Route path={"/starships"} element={<StarshipPage />} />
                <Route path={"/starships/:id"} element={<StarshipPage />} />
                <Route
                  path={"/login"}
                  element={
                    <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                  }
                />
                <Route
                  path={"/secretPage"}
                  element={<SecretPage isLoggedIn={isLoggedIn} />}
                />
                {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
                <Route path="*" element={<h2>Page not found</h2>} />
              </Routes>
            </div>
          </BrowserRouter>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
