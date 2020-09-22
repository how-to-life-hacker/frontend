import React, { useState, useEffect } from "react";
import "./Forms.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as yup from "yup";

import Signin from "./Signin";
import Signup from "./Signup";
import DisplayUser from "./DisplayUser";

import schema from "./formSchema";

const initialFormValues = {
  email: "",
  username: "",
  password: "",
};

const initialFormErrors = {
  email: "",
  username: "",
  password: "",
};

const initialUser = [];
const initiallyDisabled = true;

export default function Forms() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [currentUser, setCurrentUser] = useState(initialUser);
  const [disabled, setDisabled] = useState(initiallyDisabled);

  function validation(name, value) {
    yup
      .reach(schema, name)
      .validate(value)
      .then((res) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.message });
      });
  }

  function updateForm(inputName, inputValue) {
    validation(inputName, inputValue);
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <span> </span>
          <Link to="/signin">Login</Link>
        </nav>
        <Switch>
          <Route path="/signin">
            <Signin
              formValues={formValues}
              updateForm={updateForm}
              disabled={disabled}
              setCurrentUser={setCurrentUser}
              setFormValues={setFormValues}
              initialFormValues={initialFormValues}
              initialUser={initialUser}
            />
            <p className="error">{formErrors.email}</p>
            <p className="error">{formErrors.username}</p>
            <p className="error">{formErrors.password}</p>

            {currentUser.map((user) => {
              return <DisplayUser user={user} key={user} />;
            })}
          </Route>
          <Route path="/signup">
            <Signup
              formValues={formValues}
              updateForm={updateForm}
              disabled={disabled}
              setCurrentUser={setCurrentUser}
              setFormValues={setFormValues}
              initialFormValues={initialFormValues}
              initialUser={initialUser}
            />
            <p className="error">{formErrors.email}</p>
            <p className="error">{formErrors.username}</p>
            <p className="error">{formErrors.password}</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
