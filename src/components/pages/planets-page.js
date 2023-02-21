import React, { Component } from "react";
import { PlanetList } from "../sw-components/item-lists";
import PlanetDetails from "../sw-components/planet-details";
import { useNavigate } from "react-router-dom";

import Row from "../row/row";
export default class PlanetPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const navigate = useNavigate();

    const { selectedItem } = this.state;
    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={(itemId) => navigate(itemId)} />}
      />
    );
  }
}
