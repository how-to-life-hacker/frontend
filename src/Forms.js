import React, { useState } from "react";
import "./Forms.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Signin from "./Signin";
import Signup from "./Signup";

import schema from './formSchema'

const initialFormValues = {
    email: "",
    username: "",
    password: "",
}

const initialFormErrors = {
    email: "",
    username: "",
    password: "",
}
export default function Forms() {

    const [ formValues, setFormValues ] = useState(initialFormValues)
    const [ formErrors, setFormErrors ] = useState(initialFormErrors)


    function onSubmit(event) {
      event.preventDefault()
      // Axios.post here
    }


    function updateForm(inputName, inputValue) {
        setFormValues({...formValues, [inputName]: inputValue})
    }



  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <span> </span>
        <Link to="/signup">Signup</Link>
        <span> </span>
        <Link to="/signin">Login</Link>
        <Switch>
          <Route path="/signin">
            <Signin formValues={formValues} updateForm={updateForm} onSubmit={onSubmit} />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
