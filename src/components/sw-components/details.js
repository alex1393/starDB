import React from "react";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = swapiService;
const PersonDetails = () => {};
const PlanetDetails = () => {};
const StarshipDetails = () => {};

export { PersonDetails, PlanetDetails, StarshipDetails };
