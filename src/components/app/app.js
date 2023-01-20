import React, { Component } from "react";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import Header from "../header/header";
import "./app.css";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
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
      <div className="stardb-app">
        <Header />
        {/*{planet}*/}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>

        <PeoplePage />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              getData={this.swapiService.getAllPlanets}
              onItemSelected={this.onPersonSelected}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails
              personId={this.state.selectedPerson}
              loadingPerson={this.state.loadingPerson}
            />
          </div>
        </div>
      </div>
    );
  }
}
