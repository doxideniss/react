import React from "react";
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";

import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) return <Preloader/>;

    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path={"/profile/:userId?"} component={ProfileContainer}/>
          <Route path={"/dialogs"} component={DialogsContainer}/>

          <Route path={"/login"} component={Login}/>
          <Route path={"/news"} component={News}/>
          <Route path={"/music"} component={Music}/>
          <Route path={"/users"} component={UsersContainer}/>
          <Route path={"/settings"} component={Settings}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}),
)(App)
