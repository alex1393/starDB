import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetsImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetsImage}
    >
      <Record field={"population"} label={"Population"} />
      <Record field={"rotationPeriod"} label={"Rotation Period"} />
      <Record field={"diameter"} label={"Diameter"} />
    </ItemDetails>
  );
};

export default withSwapiService(PlanetDetails);
