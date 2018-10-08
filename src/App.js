import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: [
        { id: 1, name: "Thor" },
        { id: 2, name: "Captain America" },
        { id: 3, name: "Iron Man" },
        { id: 4, name: "Hulk" },
        { id: 5, name: "Doctor Strange" },
        { id: 6, name: "Spider Man" },
        { id: 7, name: "Black Panther" },
        { id: 8, name: "Black Widow" },
        { id: 9, name: "Hawkeye" },
        { id: 10, name: "Falcon" },
        { id: 11, name: "Winter Soldier" },
        { id: 12, name: "Scarlet Witch" },
        { id: 13, name: "Vision" },
        { id: 14, name: "Captain Marvel" },
        { id: 15, name: "War Machine" }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Avengers: by Gabe</h1>
          {this.state.avengers.map(avenger => {
            return <p key={avenger.id}>{avenger.name}</p>;
          })}
        </header>
      </div>
    );
  }
}

export default App;
