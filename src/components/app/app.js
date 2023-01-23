import React, { Component } from "react";
import RandomPlanet from "../random-planet/random-planet";
import Header from "../header/header";
import "./app.css";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import ItemDetails from "../item-details/item-details";
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

    const { getPerson, getStarship, getPersonImage, getStarshipImage } =
      this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={3}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      />
    );

    return (
      <div className="stardb-app">
        <Header />
        {/*{planet}*/}
        {/*<button*/}
        {/*  className="toggle-planet btn btn-warning btn-lg"*/}
        {/*  onClick={this.toggleRandomPlanet}*/}
        {/*>*/}
        {/*  Toggle Random Planet*/}
        {/*</button>*/}

        <Row left={personDetails} right={starshipDetails} />
        {/*<PeoplePage />*/}
        {/*<div className="row mb2">*/}
        {/*  <div className="col-md-6">*/}
        {/*    <ItemList*/}
        {/*      getData={this.swapiService.getAllPlanets}*/}
        {/*      onItemSelected={this.onPersonSelected}*/}
        {/*      renderItem={(item) => item.name}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className="col-md-6">*/}
        {/*    <PersonDetails*/}
        {/*      personId={this.state.selectedPerson}*/}
        {/*      loadingPerson={this.state.loadingPerson}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className="row mb2">*/}
        {/*  <div className="col-md-6">*/}
        {/*    <ItemList*/}
        {/*      getData={this.swapiService.getAllStarships}*/}
        {/*      onItemSelected={this.onPersonSelected}*/}
        {/*      renderItem={({ name }) => name}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className="col-md-6">*/}
        {/*    <PersonDetails*/}
        {/*      personId={this.state.selectedPerson}*/}
        {/*      loadingPerson={this.state.loadingPerson}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    );
  }
}
