import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./main-components/Home";
import Error from "./main-components/Error";


const App = () => {

  return (
    <HashRouter>
          <Switch>
            <Route path="/" component={Home} exact />
             <Route component={Error} />
          </Switch>
    </HashRouter>
  );
};

export default App;
