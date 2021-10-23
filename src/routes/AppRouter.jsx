import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MaleScreen from "../pages/MaleScreen";
import SearchScreen from "../pages/SearchScreen";
import FemaleScreen from "../pages/FemaleScreen";
import Navbar from "../components/Navbar";
import CharacterScreen from "../pages/CharacterScreen";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/male" component={MaleScreen} />
        <Route exact path="/female" component={FemaleScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Route exact path="/character/:id" component={CharacterScreen} />
        <Redirect to="/search" />
      </Switch>
    </>
  );
};

export default AppRouter;
