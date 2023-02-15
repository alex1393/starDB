import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import { useParams } from "react-router-dom";

const PlanetDetails = (props) => {
  const { id } = useParams();
  return (
    <ItemDetails {...props} itemId={id}>
      <Record field={"population"} label={"Population"} />
      <Record field={"rotationPeriod"} label={"Rotation Period"} />
      <Record field={"diameter"} label={"Diameter"} />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetsImage,
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
