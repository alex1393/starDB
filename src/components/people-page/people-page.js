import React, { Component } from "react";
import "./people-page.css";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
};
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
        <PersonDetails
          personId={this.state.selectedPerson}
          loadingPerson={this.state.loadingPerson}
        />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
