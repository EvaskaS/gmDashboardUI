import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Roll from "./images/noun_solid_d20.png";

function App() {
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
                <img class="roll" src={Roll} />
              </a>
            </li>
            <li>
              <a href="#">Add</a>
            </li>
            <li>
              <a href="#">Save</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-user"></span> Sign Up
              </a>
            </li>
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-log-in"></span> Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
