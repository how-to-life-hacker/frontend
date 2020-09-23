import React from "react";
import { Link } from "react-router-dom";
import HowToCard from "./HowToCard";

function HowToList(props) {
  const { howtos } = props;
  console.log(howtos)

  return (
    <div className="howto-list">
      {howtos.map((howto) => (
        <>
          <Link key={howto.id} to={`/howto/${howto.id}`}>
            <HowToCard howto={howto} />
          </Link>
        </>
      ))}
    </div>
  );
}

export default HowToList;
