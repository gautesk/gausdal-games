import React from 'react';
import './App.css';
import {
    HashRouter as Router, Redirect, Route, Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Forside from "./pages/Forside";
import Feilside from "./pages/Feilside";
import Konkurranseside from "./pages/Konkurranseside";
import Deltakereside from "./pages/Deltakereside";
import Pakkeliste from "./pages/Pakkeliste";

function App() {
  return (
      <Router>
        <Header />
        <Switch>
            <Route exact path="/" children={<Forside />}/>
            <Route exact path="/konkurranser" children={<Konkurranseside />}/>
            <Route exact path="/deltakere" children={<Deltakereside />}/>
            <Route exact path="/pakkeliste" children={<Pakkeliste />} />
            <Route exact path="/notfound" children={<Feilside/>} />
            <Redirect exact from="*" to="/notfound" />

        </Switch>
      </Router>
  );
}

export default App;
