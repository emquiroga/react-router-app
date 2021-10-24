import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const FemaleScreen = () => {
  const femaleChars = Characters.filter((char) => char.type === "m");

  return (
    <div className="container mt-3">
      <h1>Female Characters</h1>
      <hr />
      <div className="row">
        {femaleChars.map((femaleChars) => (
          <Card key={femaleChars.id} {...femaleChars} />
        ))}
      </div>
    </div>
  );
};

export default FemaleScreen;
