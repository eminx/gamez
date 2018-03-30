import React, { Component } from 'react';
import GameItem from './reusables/GameItem';
import GameItemDetailed from './reusables/GameItemDetailed';

import logo from './logo.svg';
import './App.css';
const gamesData = require("./store/data.json");


class App extends Component {
  state={
    games: gamesData,
    showItem: null
  }

  setDetailedItem = (item) => {
    this.setState({showItem: item})
  }

  render() {
    const { games, showItem } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nodes of the 21st century: Play Gamez!</h1>
        </header>
        <main>
          {games.data.map((game, i) => (
            <GameItem 
              onClick={() => this.setDetailedItem(game)}
              key={game.id}
              name={game.attributes.name}
              description={game.attributes.description}
            />
          ))}
        </main>
        <aside>
          {
            showItem
              ? <GameItemDetailed item={showItem} />
              : null
          }
        </aside>
      </div>
    );
  }
}

export default App;
