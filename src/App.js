import logo from "./logo.svg";
import "./App.css";
import Roll from "./images/noun_solid_d20.png";
import Add from "./images/noun_add.png";
import Save from "./images/noun_save.png";
import Login from "./images/noun_login.png";
import React, { Component } from "react";

class App extends Component {
  state = {
    count: this.props.value,
  };

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                GM Dashboard
              </a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="#">
                  <img class="roll" src={Roll} alt="Roll from Selected" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img class="roll" src={Add} alt="Add a Chart" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img class="roll" src={Save} alt="Save Data" />
                </a>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  <span class="glyphicon glyphicon-log-in"></span>{" "}
                  <img class="login" src={Login} alt="Login or Register" />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <text area class="textbox-left">
          Hello!
        </text>
      </div>
    );
  }
}

export default App;
