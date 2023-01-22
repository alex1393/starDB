import React, { Component } from "react";
import "./people-page.css";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";

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
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        getData={this.swapiService.getAllPeople}
        onItemSelected={this.onPersonSelected}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    );
    const personDetails = (
      <PersonDetails
        personId={this.state.selectedPerson}
        loadingPerson={this.state.loadingPerson}
      />
    );

    return (
      <React.Fragment>
        <Row left={itemList} right={personDetails} />
        <Row left="Foo" right="Bar" />
      </React.Fragment>
    );
  }
}
