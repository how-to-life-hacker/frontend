import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function EditHowTo({ howtoList, setHowToList }) {
  let { id } = useParams();
  let howto = howtoList.filter((howto) => {
    return howto.id === Number(id);
  });
  howto = howto[0];
  let [formValues, setFormValues] = useState([]);
  let history = useHistory();

  function onChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    axiosWithAuth()
      .put(`/howto/${id}`, formValues)
      .then((res) => {
        let newList = howtoList.reduce((acc, howto) => {
          let retHowTo;
          if (howto.id === id) {
            retHowTo = res.data.howto;
          } else retHowTo = howto;
          return [...acc, retHowTo];
        }, []);
        setHowToList(newList);
        history.push("/howto");
      })
      .catch((err) => console.log(err));
  }

  console.log(formValues)

  return (
    <div></div>
    // <form onSubmit={onSubmit} className="edit-howto-form">
    //   <input
    //     name="title"
    //     type="text"
    //     value={formValues.title}
    //     onChange={onChange}
    //   />
    //   <input
    //     name="category"
    //     type="text"
    //     value={formValues.category}
    //     onChange={onChange}
    //   />
    //   <input
    //     name="description"
    //     type="text"
    //     value={formValues.description}
    //     onChange={onChange}
    //   />
    //   <input
    //     name="user_id"
    //     type="id"
    //     value={formValues.user_id}
    //     onChange={onChange}
    //   />
    //   <button>submit</button>
    // </form>
  );
}