import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const StarshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field={"model"} label={"Model"} />
      <Record field={"length"} label={"Length"} />
      <Record field={"costInCredits"} label={"Cost"} />
    </ItemDetails>
  );
};

export default withSwapiService(StarshipDetails);
