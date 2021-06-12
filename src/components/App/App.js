import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Appointments from "../Appointments/Appointments";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Online from "../Online/Online";
import People from "../People/People";
import Preheader from "../Preheader/Preheader";
import Profile from "../Profile/Profile";
import "./App.css";


function App() {
  return(
    <div className="page">
      <Preheader></Preheader>
      <Header></Header>
      
      <Switch>
        <Route exact path="/">
          <Main></Main>
          <AboutUs></AboutUs>
          <People></People>
        </Route>
        
        <Route path="/online-appointment">
          <Online></Online>
        </Route>

        <Route path="/my-appointments">
          <Appointments></Appointments>
        </Route>

        <Route path="/profile">
          <Profile></Profile>
        </Route>
      </Switch>
      
      <Footer></Footer>
    </div>
  )
}

export default App;