import React from "react";
import { PlanetList } from "../sw-components/item-lists";
import PlanetDetails from "../sw-components/planet-details";
import { useNavigate } from "react-router-dom";
import Row from "../row/row";

const PlanetPage = () => {
  const navigate = useNavigate();
  return (
    <Row
      left={
        <PlanetList
          onItemSelected={(itemId) => {
            navigate(`/planets/${itemId}`, { replace: true });
          }}
        />
      }
      right={<PlanetDetails />}
    />
  );
};

export default PlanetPage;
