import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const MaleScreen = () => {
  const maleChars = Characters.filter((char) => char.type === "h");

  return (
    <div className="container mt-3">
      <h1>Male Characters</h1>
      <hr />
      <div className="row">
        {maleChars.map((maleChars) => (
          <Card key={maleChars.id} {...maleChars} />
        ))}
      </div>
    </div>
  );
};

export default MaleScreen;
