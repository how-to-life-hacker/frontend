import React from "react";
import "./Forms.css";
import { BrowserRouter as Route, Link } from "react-router-dom";
console.log(Route)

export default function Forms() {
  return (
    <div className="signup">
      <div className="form-links">
        <Link to="/login">Login </Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <h3>Sign Up Here</h3>
      <p>Email</p>
      <p>Username</p>
      <p>Password</p>
    </div>
  );
}
