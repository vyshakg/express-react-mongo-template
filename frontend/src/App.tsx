import React from "react";
import { Switch, Route, RouteComponentProps, RouteProps } from "react-router";
import Home from "./components/homepage/Home";

const App: React.FC = ({ location }: RouteProps) => {
  return (
    <Switch>
      <Route exact location={location} path="/" component={Home} />
    </Switch>
  );
};

export default App;
