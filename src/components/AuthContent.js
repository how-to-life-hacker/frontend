import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import HowToCard from "./HowToCard";
import styles from "styled-components";

const HeaderStyle = styles.div`
margin: 3rem;
h1{
    text-align: center;
}
`

function AuthContent() {
  const [howtos, setHowTos] = useState([]);

  useEffect(() => {
      axiosWithAuth().get("/howto")
      .then((res) => {
        setHowTos(res.data.howto);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(howtos)

  return (
      <div className="howto-list">
      {
        howtos.map(howto => (
          <>
            <HeaderStyle>
              <HowToCard howto={howto} />
            </HeaderStyle>
          </>
        ))
      }
    </div>
  );
}

export default AuthContent;