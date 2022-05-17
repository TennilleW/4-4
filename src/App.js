import React, { Component } from "react";
import "./App.css";
import Heading from "./Components/heading.js";
import FlipCard from "./Components/flipcard.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <a class="active" href="#home">
              Home
            </a>
          </li>

          <li>
            <a href="#news">News</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#Search">Search</a>
          </li>
        </ul>
        <Heading />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
      </div>
    );
  }
}

export default App;
