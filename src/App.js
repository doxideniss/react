import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {

  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Route path={"/profile"} component={Profile}/>
        <Route path={"/dialogs"} component={DialogsContainer}/>

        <Route path={"/news"} component={News}/>
        <Route path={"/music"} component={Music}/>
        <Route path={"/users"} component={UsersContainer}/>
        <Route path={"/settings"} component={Settings}/>
      </div>
    </div>
  );
};

export default App;
