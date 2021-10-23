import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import queryString from "query-string";
import { Characters } from "../models/Characters";
import Card from "../components/Card";

const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [input, setInput] = useState(q);
  const [characters, setCharacters] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${input}`);
  };

  const getChars = () => {
    if (input.trim() !== "") {
      const value = input.toLocaleLowerCase();
      const chars = Characters.filter((char) =>
        char.name.toLowerCase().includes(value)
      );
      setCharacters(chars);
    } else {
      setCharacters([]);
    }
  };
  useEffect(() => {
    getChars();
  }, [q]);
  return (
    <div className="container">
      <h1 className="text-center">Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <h2>Search </h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label w-100">
              Character:{" "}
              <input
                className="form-control"
                autoComplete="off"
                value={input}
                type="text"
                placeholder="Search a name..."
                onChange={handleChange}
              />
            </label>
            <button className="btn btn-info w-100" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-6">
          <h2>Characters: {characters.length}</h2>
          {characters.length === 0 && (
            <div className="alert alert-warning text-center">
              Character not found
            </div>
          )}
          {characters.map((char) => (
            <Card key={char.id} {...char} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
