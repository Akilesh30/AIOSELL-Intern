import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Sidebar>
            <Switch></Switch>
          </Sidebar>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
