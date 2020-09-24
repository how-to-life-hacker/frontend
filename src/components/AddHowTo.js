import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

let initialFormValues = {
  title: "",
  category: "",
  description: "",
  user_id: "",
};

export default function AddHowTo({ howtoList, setHowToList }) {
  let [formValues, setFormValues] = useState(initialFormValues);
  let history = useHistory();

  function onChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    let newHowTo = { ...formValues };
    axiosWithAuth()
      .post("/howto", newHowTo)
      .then((res) => {
        console.log(res.data.howto);
        setHowToList(res.data.howto);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div><h3>Add a HowTo:</h3>
    <form onSubmit={onSubmit} className="add-howto-form">
      <input
        name="title"
        type="text"
        value={formValues.title}
        onChange={onChange}
        placeholder="Enter Title"
      />
      <input
        name="category"
        type="text"
        value={formValues.category}
        onChange={onChange}
        placeholder="Enter Category"
      />
      <input
        name="description"
        type="text"
        value={formValues.description}
        onChange={onChange}
        placeholder="Enter Description"
      />
      <input
        name="user_id"
        type="id"
        value={formValues.user_id}
        onChange={onChange}
        placeholder="Enter User ID"
      />

        <button>Submit</button>
    </form>
    <h5>Please click Refresh HowTo List Button below after submitting a new HowTo to view it.</h5>
    </div>
  );
}