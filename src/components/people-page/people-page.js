import React, { Component } from "react";
import "./people-page.css";
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry/ErrorBoundry";
import Row from "../row/row";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 1,
    loadingPerson: true,
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };
  render() {
    const itemList = (
      <ItemList
        getData={this.swapiService.getAllPeople}
        onItemSelected={this.onPersonSelected}
      >
        {(i) => `${i.name} (${i.gender}, ${i.birthYear})`}
      </ItemList>
    );
    const personDetails = (
      <ErrorBoundry>
        <ItemDetails
          itemId={this.state.selectedPerson}
          loadingItem={this.state.loadingPerson}
        />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
