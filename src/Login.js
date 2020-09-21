import React from "react";
import "./Forms.css";
import { BrowserRouter as Route, Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="form-links">
        <Link to="/login">Login </Link>
        <Link to="/signup">Signup</Link>
      </div>
      <h3>Log In Here</h3>
      <p>Username/Email</p>
      <p>Password</p>
    </div>
  );
}
