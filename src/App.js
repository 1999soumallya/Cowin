import React, { useState } from 'react';
import Naivbar from "./components/navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Context from './context/create';
import Certificate from './components/certificate';
import Tracker from './components/Tracker';
import VaccineAvailability from './components/VaccineAvailability';
import Bedbooking from './components/BedBooking';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

axios.defaults.baseURL = 'http://localhost:9000/api/auth/';

function App() {
  const [user, setuser] = useState(null)
  return (
    <>
      <Context>
        <Router>
          <Naivbar title="Kavach" AboutText="About Kavach" userset={user} />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/Signin">
              <Signin userset={user} />
            </Route>
            <Route exact path="/Signup">
              <Signup userset={user}/>
            </Route>
            <Route exact path="/Tracker">
              <Tracker/>
            </Route>
            <Route exact path="/VaccineAvaliability">
              <VaccineAvailability/>
            </Route>
            <Route exact path="/Certificate">
              <Certificate/>
            </Route>
            <Route exact path="/BedBooking">
              <Bedbooking/>
            </Route>
          </Switch>
        </Router>
      </Context>
    </>
  )
}

export default App;
