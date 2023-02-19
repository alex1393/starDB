import React from "react";
import { PlanetList } from "../sw-components/item-lists";
import { useNavigate } from "react-router-dom";
const PlanetPage = () => {
  const navigate = useNavigate();

  return (
    <PlanetList
      onItemSelected={(itemId) => {
        navigate(`${itemId}`);
      }}
    />
  );
};

export default PlanetPage;
