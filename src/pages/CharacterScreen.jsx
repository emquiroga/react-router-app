import React from "react";
import { useParams } from "react-router";
import { Characters } from "../models/Characters";

const CharacterScreen = ({ history }) => {
  const { id } = useParams();
  const { type, name, description } = Characters.find(
    (character) => character.id === id
  );
  const path = `/assets/${type}-${id}.png`;
  const handleBack = () => {
    history.goBack();
  };
  return (
    <div className="container row mt-3">
      <div className="col-8">
        <img
          className="img-thumbnail "
          style={{ width: "100%", height: "auto" }}
          src={path}
          alt={id}
        />
      </div>
      <div className="col-4">
        <h3>Name: {name}</h3>
        <p>Description: {description}</p>
        <button className="btn btn-outline-primary" onClick={handleBack}>
          Return
        </button>
      </div>
    </div>
  );
};

export default CharacterScreen;
