import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import { useParams } from "react-router-dom";

const StarshipDetails = (props) => {
  const { id } = useParams();
  return (
    <ItemDetails {...props} itemId={id}>
      <Record field={"model"} label={"Model"} />
      <Record field={"length"} label={"Length"} />
      <Record field={"costInCredits"} label={"Cost"} />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
