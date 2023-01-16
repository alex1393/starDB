import React, { Component } from "react";
import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
export default class ItemList extends Component {
  swapiService = new SwapiService();
  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({ peopleList });
    });
  }

  renderItems = (arr) => {
    return arr.map((person) => {
      return (
        <li key={person.id} className="list-group-item">
          {person.name}
        </li>
      );
    });
  };

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    return (
      <ul className="item-list list-group">
        {this.renderItems(peopleList)}
        {/*<li className="list-group-item">Luke Skywalker</li>*/}
        {/*<li className="list-group-item">Darth Vader</li>*/}
        {/*<li className="list-group-item">R2-D2</li>*/}
      </ul>
    );
  }
}
