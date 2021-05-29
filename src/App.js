import React from 'react';
import MainComponent from './mainComponent/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReservationComp from './components/ReservationComp/ReservationComp';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
         <MainComponent></MainComponent>
        </Route>
        <Route path="/reservation">
          <ReservationComp></ReservationComp>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;