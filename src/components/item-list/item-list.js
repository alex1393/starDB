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
  dataItems = this.props.dataItems;

  renderItems = (arr) => {
    let count = 0;
    return arr.map((data) => {
      let dataAll = this.dataItems.map((el) => {
        return el + ": " + data[el] + " ";
      });
      if (count != 5) {
        count++;
        return (
          <li
            key={data.id}
            className="list-group-item"
            onClick={() => {
              this.onItemSelected(data.id);
            }}
          >
            {dataAll}
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
