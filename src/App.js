// import React from "react";
// import "./App.css";

// import Forms from "./Forms";

// function App() {
//   return (
//     <div className="App">
//       <Forms />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import SavedHowTos from "./components/SavedHowTos";
import HowToList from "./components/HowToList";
import HowTos from "./components/HowTos";
import axios from "axios";
import EditHowTo from "./components/EditHowTo";
import AddHowTo from "./components/AddHowTo";
import Forms from "./Forms";
const App = () => {
  const [savedHowTos, setSavedHowTos] = useState([]);
  const [howtoList, setHowToList] = useState([]);

  const getHowToList = () => {
    axios
      .get("http://localhost:5000/api/howtos")
      .then((res) => setHowToList(res.data))
      .catch((err) => console.log(err.response));
  };

  const addToSavedHowTos = (howto) => {
    setSavedHowTos([...savedHowTos, howto]);
  };

  useEffect(() => {
    getHowToList();
  }, []);

  return (
    <>
      <Route>
        <center>
          <Forms />
        </center>
      </Route>
      <SavedHowTos list={savedHowTos} />
      <Route exact path="/">
        <Link to="/add-howto">Add HowTo</Link>
        <HowToList howtos={howtoList} />
      </Route>
      <Route path="/add-howto">
        <AddHowTo setHowToList={setHowToList} howtoList={howtoList} />
      </Route>
      <Route path="/howtos/:id">
        <HowTos
          addToSavedHowTos={addToSavedHowTos}
          setHowToList={setHowToList}
          howtoList={howtoList}
        />
      </Route>
      <Route path="/update-howto/:id">
        <EditHowTo setHowToList={setHowToList} howtoList={howtoList} />
      </Route>
    </>
  );
};

export default App;