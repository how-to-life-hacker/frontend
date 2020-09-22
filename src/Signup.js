import React from "react";
import "./Forms.css";
import { BrowserRouter as Route, Link } from "react-router-dom";
import axios from "axios";
console.log(Route);

export default function Signup(props) {
  const {
    formValues,
    updateForm,
    disabled,
    setCurrentUser,
    setFormValues,
    initialFormValues,
    initialUser,
  } = props;

  function onChange(evt) {
    const { name, value } = evt.target;
    updateForm(name, value);
  }

  function onSubmit(event) {
    event.preventDefault();

    axios.post('https://life-hacker-backend.herokuapp.com/register', formValues)
    .then(res=> {
      axios.get(`https://life-hacker-backend.herokuapp.com/user/${res.data.data.id}`)
      .then(resolved => {
        console.log(resolved.data.user)
        setCurrentUser(initialUser)
        setCurrentUser([resolved.data.user])
      }) 
      .catch(error => {
        console.log(error)
      })
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
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
          Username:
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

        <button type="submit" className="submitButton" disabled={disabled}>
          Submit
        </button>
      </form>
    </div>
  );
}
