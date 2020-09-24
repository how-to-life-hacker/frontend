import React from 'react';
import styles from "styled-components";
import { Link } from "react-router-dom";
import EditHowTo from "./EditHowTo";

const HowToStyler = styles.div`
background-color: #CDDFD9;
`;

const HowToCard = props => {
    const { title, category, description, user_id } = props.howto;
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
        {/* <EditHowTo /> */}
      </div>
    );
};

export default HowToCard;