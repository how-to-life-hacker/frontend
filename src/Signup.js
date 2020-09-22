import React from "react";
import "./Forms.css";
import { BrowserRouter as Route, Link } from "react-router-dom";
console.log(Route)

export default function Signup(props) {

  const { formValues, updateForm, onSubmit, disabled } = props;

  function onChange(evt) {
    const { name, value } = evt.target;
    updateForm(name, value);
  }

  return (
    <div className="signup">
      <div className="form-links">
        <Link to="/signin">Sign In </Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <h3>Sign Up Here</h3>
      <form onSubmit={onSubmit}>
        <label>
          Email:
          <span> </span>
          <input
            type="text"
            name="email"
            value={formValues.email}
            onChange={onChange}
          />
          <br />
        </label>

        <label>
          Username(optional):
          <span> </span>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={onChange}
          />
          <br />
        </label>

        <label>
          Password:
          <span> </span>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={onChange}
          />
          <br />
        </label>

        <button type="submit" className="submitButton" disabled={disabled}>Submit</button>
      </form>
    </div>
  );
}
