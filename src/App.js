import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = props => {
  let { state, store } = props;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path={"/profile"}
            render={() => (
              <Profile
                state={state.profilePage}
                dispatch={store.dispatch.bind(store)}
              />
            )}
          />
          <Route
            path={"/dialogs"}
            render={() => (
              <Dialogs
                state={state.dialogsPage}
                dispatch={store.dispatch.bind(store)}
              />
            )}
          />

          <Route path={"/news"} component={News} />
          <Route path={"/music"} component={Music} />
          <Route path={"/settings"} component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
