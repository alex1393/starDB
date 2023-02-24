import React from "react";
import { StarshipList } from "../sw-components/item-lists";
import StarshipDetails from "../sw-components/starship-details";
import { useNavigate } from "react-router-dom";
import Row from "../row/row";

const StarshipPage = () => {
  const navigate = useNavigate();
  return (
    <Row
      left={
        <StarshipList
          onItemSelected={(itemId) => {
            navigate(`/starships/${itemId}`, { replace: true });
          }}
        />
      }
      right={<StarshipDetails />}
    />
  );
};

export default StarshipPage;
