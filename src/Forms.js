import React, { useState } from "react";
import "./Forms.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as yup from "yup";

import Signin from "./Signin";
import Signup from "./Signup";
import CurrentUser from "./CurrentUser"

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

const initialUsers = []

export default function Forms() {

  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ users, setUsers ] = useState(initialUsers)

  function onSubmit(event) {
    event.preventDefault();
    // Axios.post here

    setUsers(initialUsers)
    setUsers([formValues])
    setFormValues(initialFormValues)
  }

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
              onSubmit={onSubmit}
            />
            <p className="error">{formErrors.email}</p>
            <p className="error">{formErrors.username}</p>
            <p className="error">{formErrors.password}</p>

            {
              users.map(user => {
                return <CurrentUser user={user} key={user} />
              })
            }


          </Route>
          <Route path="/signup">
            <Signup 
              formValues={formValues}
              updateForm={updateForm}
              onSubmit={onSubmit}
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
