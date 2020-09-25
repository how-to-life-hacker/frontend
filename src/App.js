import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute';
import Login from "./components/Login";
import AuthContent from "./components/AuthContent";
import FeedBar from "./components/FeedBar";
import Forms from "./components/Forms";
import SavedHowTos from "./components/SavedHowTos";
import HowToList from "./components/HowToList";
import HowTos from "./components/HowTos";
import EditHowTo from "./components/EditHowTo";
import AddHowTo from "./components/AddHowTo";
import HeaderBar from "./components/HeaderBar";
import { axiosWithAuth } from "./utils/axiosWithAuth";

function App() {

    const [savedHowTos, setSavedHowTos] = useState([]);
    const [howtoList, setHowToList] = useState([]);

  return (
    <Router>
      <div className="App">
        <HeaderBar />
        <Route exact path="/" component={Forms} />
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/howto">
          {/* <SavedHowTos list={savedHowTos} /> */}
          <AddHowTo />
          <FeedBar />
          <AuthContent />
          {/* <HowTos
            addToSavedHowTos={addToSavedHowTos}
            setHowToList={setHowToList}
            howtoList={howtoList}
          /> */}
          {/* <EditHowTo setHowToList={setHowToList} howtoList={howtoList} /> */}
        </PrivateRoute>
      </div>
    </Router>
  );
}

export default App;