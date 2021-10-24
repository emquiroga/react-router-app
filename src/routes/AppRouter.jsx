import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "../components/Navbar";

const MaleScreen = lazy(() => import("../pages/MaleScreen"));
const FemaleScreen = lazy(() => import("../pages/FemaleScreen"));
const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="container text-center mt-5">
            <h1 className="text-info">Loading...</h1>
            <div class="spinner-border text-info" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <Switch>
          <Route exact path="/male" component={MaleScreen} />
          <Route exact path="/female" component={FemaleScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/character/:id" component={CharacterScreen} />
          <Redirect to="/search" />
        </Switch>
      </Suspense>
    </>
  );
};

export default AppRouter;
