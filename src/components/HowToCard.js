import React from 'react';
import styles from "styled-components";
import { Link } from "react-router-dom";
import EditHowTo from "./EditHowTo";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const HowToStyler = styles.div`
background-color: #CDDFD9;
box-shadow: 3px 3px 3px #000;
border-radius: 1rem;
padding: 1rem;
`;

const HowToCard = props => {
    const { title, category, description, user_id } = props.howto;

  function onClick(event) {
    axiosWithAuth()
      .delete(`/howto/${props.howto.id}`)
      .then((res) => {
        window.location.reload();
      });
  }

  console.log(props)

    return (
      <div className="howto-card">
        <HowToStyler>
          <h2>{title}</h2>
          <div className="howto-category">
            Category: <em>{category}</em>
          </div>
          <div className="howto-description">
            Description: <strong>{description}</strong>
          </div>
          <div className="howto-user_id">
            User ID: <strong>{user_id}</strong>
          </div>
        </HowToStyler>
        <button onClick={onClick}>Delete</button>
        {/* <EditHowTo /> */}
      </div>
    );
};

export default HowToCard;