import React from "react";
import { StarshipList } from "../sw-components/item-lists";
import { useNavigate } from "react-router-dom";
const StarshipPage = () => {
  const navigate = useNavigate();

  return (
    <StarshipList
      onItemSelected={(itemId) => {
        navigate(`${itemId}`);
      }}
    />
  );
};

export default StarshipPage;
