import React from "react";
import "./Forms.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

export default function Forms() {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <span> </span>
        <Link to="/signup">Signup</Link>
        <span> </span>
        <Link to="/login">Login</Link>
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
