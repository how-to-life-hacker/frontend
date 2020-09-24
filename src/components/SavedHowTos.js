import React from "react";
import { NavLink, Link } from "react-router-dom";

function SavedHowTos({ list }) {

  function onClick(event) {
        window.location.reload();
  }

  return (
    <div className="saved-list">
      <h3>Saved HowTos:</h3>
      {list.map((howto) => {
        return (
          <NavLink
            to={`/howto/${howto.id}`}
            key={howto.id}
            activeClassName="saved-active"
          >
            <span className="saved-howto">{howto.title}</span>
          </NavLink>
        );
      })}
      <div className="home-button">
        <button onClick={onClick}>Refresh HowTo List</button>
      </div>
    </div>
  );
}

export default SavedHowTos;