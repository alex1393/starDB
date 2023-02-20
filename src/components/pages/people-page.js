import React from "react";
import { PersonList } from "../sw-components/item-lists";
import { useNavigate } from "react-router-dom";

const PeoplePage = () => {
  const navigate = useNavigate();

  return <PersonList onItemSelected={(itemId) => navigate(itemId)} />;
};

export default PeoplePage;
