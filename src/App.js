import React, { Component } from 'react';
import GameItem from './reusables/GameItem';
import GameItemDetailed from './reusables/GameItemDetailed';
import Filtrer from './reusables/Filtrer';

import logo from './logo.svg';
import './App.css';
const gamesData = require("./store/data.json");


class App extends Component {
  state = {
    games: gamesData,
    showItem: null,
    filterValue: ''
  }

  setDetailedItem = (item) => {
    this.setState({showItem: item});
  }

  updateFilter = (val) => {
    this.setState({
      filterValue: val
    })
  }

  deleteFilterText = () => {
    this.setState({filterValue: ''});
  }

  closeDetailedItem = () => {
    this.setState({showItem: null})
  }

  getFilteredItems = () => {
    const gamesData = this.state.games.data;
    if (gamesData.length > 0) {
      const filteredGames = gamesData.filter((game) => {
        const filterState = this.state.filterValue;
        if (isNaN(filterState)) {
          const match = game.attributes.name.toLowerCase().indexOf(
            filterState.toLowerCase()
          );
          return (match !== -1);
        } else {
          return -1;
        }
      });
      return filteredGames;
    }
  }

  render() {
    const { games, showItem } = this.state;

    const filteredGames = this.getFilteredItems();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nodes of the 21st century: Play Gamez!</h1>
        </header>
        <div>
          <Filtrer
            updateFilter={this.updateFilter}
            placeholder="filter..."
            deleteFilterText={this.deleteFilterText}
            value={this.state.filterValue}
          />
        </div>
        <main>
          <div className="games-container">
            {filteredGames
              ?
                filteredGames.map((game, i) => (
                  <GameItem 
                    onClick={() => this.setDetailedItem(game)}
                    key={game.id}
                    name={game.attributes.name}
                    description={game.attributes.description}
                  />
                ))
              : null
            }
          </div>
        </main>
        <aside>
          {
            showItem
              ? <GameItemDetailed item={showItem} onClose={() => this.closeDetailedItem()} />
              : null
          }
        </aside>
      </div>
    );
  }
}

export default App;
