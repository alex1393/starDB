import React, { Component } from "react";
import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
export default class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => {
      this.setState({ itemList });
    });
  }
  onItemSelected = this.props.onItemSelected;
  renderItems = (arr) => {
    let count = 0;
    return arr.map(({ id, name }) => {
      if (count != 5) {
        count++;
        return (
          <li
            key={id}
            className="list-group-item"
            onClick={() => {
              this.onItemSelected(id);
            }}
          >
            {name}
          </li>
        );
      }
    });
  };

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    return (
      <ul className="item-list list-group">{this.renderItems(itemList)}</ul>
    );
  }
}
