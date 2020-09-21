import React, { useEffect } from "react";
import "./Forms.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login" className="main-form">
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
