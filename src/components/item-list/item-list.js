import React, { Component } from "react";
import "./item-list.css";
import Spinner from "../spinner/spinner";
class ItemList extends Component {
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
    return arr.map((item) => {
      const { id } = item;
      let label = this.props.children(item);
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
            {label}
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

const f = () => {
  return class extends Component {
    render() {
      return <ItemList {...this.props} />;
    }
  };
};

export default f();
