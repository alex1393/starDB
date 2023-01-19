import React, { Component } from "react";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import Header from "../header/header";
import "./app.css";
import PeoplePage from "../people-page/people-page";
export default class App extends Component {
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
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>

        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}
