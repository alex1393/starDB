import React, { useState } from "react";
import { PlanetList } from "../sw-components/item-lists";
import PlanetDetails from "../sw-components/planet-details";
import { useNavigate } from "react-router-dom";

import Row from "../row/row";
const PlanetPage = () => {
  const navigate = useNavigate();

  const [selectedItem, setItem] = useState(1);

  const onItemSelected = (selectedItem) => {
    setItem(() => navigate(selectedItem));
  };

  console.log(navigate(selectedItem));

  return (
    <Row
      left={<PlanetList onItemSelected={onItemSelected} />}
      right={<PlanetDetails itemId={selectedItem} />}
    />
  );
};

export default PlanetPage;
