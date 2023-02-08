import React from "react";
import withData from "../hoc-helpers/with-data";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import ItemList from "../item-list/item-list";
import compose from "../hoc-helpers/compose";
import withChildFunction from "../hoc-helpers/with-child-function";

const renderName = ({ name }) => <span>{name}</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};
const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};
const mapSatrshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);
const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);
const StarshipList = compose(
  withSwapiService(mapSatrshipMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
