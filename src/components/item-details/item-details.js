import React, { Component } from "react";
import "./item-details.css";
import Spinner from "../spinner/spinner";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}: </span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };
export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    loading: true,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl
    ) {
      this.setState({
        loading: true,
      });
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then((item) => {
      this.setState({
        item,
        image: getImageUrl(item),
        loading: false,
      });
    });
  }

  render() {
    if (!this.state.item) {
      return <span>Select a item from the list</span>;
    }

    if (this.state.loading) {
      return <Spinner />;
    }

    const { item, image } = this.state;

    const { name } = item;

    return (
      <div className="item-details card">
        <img className="item-image" src={image} alt="star object" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}
