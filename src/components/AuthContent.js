import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import HowToCard from "./HowToCard";

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
              <HowToCard howto={howto} />
          </>
        ))
      }
    </div>
  );
}

export default AuthContent;