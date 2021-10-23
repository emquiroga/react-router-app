import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import LoginScreen from "../pages/LoginScreen";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import AppRouter from "./AppRouter";

const LoginRouter = () => {
  const { log } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <PublicRoutes path="/login" auth={log} component={LoginScreen} />
        <PrivateRoutes path="/" auth={log} component={AppRouter} />
      </Switch>
    </Router>
  );
};

export default LoginRouter;
