import React from "react";
import "./Forms.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

export default function Forms() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
