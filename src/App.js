import React, { Component } from 'react';
import GameItem from './reusables/GameItem';
import GameItemDetailed from './reusables/GameItemDetailed';
import Filtrer from './reusables/Filtrer';

import './App.css';
const gamesData = require("./store/data.json");


class App extends Component {
  state = {
    games: gamesData,
    showItem: null,
    filterValue: ''
  }

  setDetailedItem = (item) => {
    this.setState({
      showItem: item
    });
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

  renderGamesOfFriends = (game) => {
    const online_friends = game.attributes.online_friends;
    const style = {
      backgroundColor: '#e9e9e9',
      marginBottom: 10,
      padding: 10,
    }

    const thumbStyle = {
      paddingLeft: 90,
      backgroundImage: `url('${game.attributes.img_card_bg}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left top',
      backgroundSize: 85
    }

    if (online_friends && online_friends.length > 0) {
      return (
        <li className="clearfix" key={game.id} style={style}>
          <div style={thumbStyle}>
            <h4>{game.attributes.name}</h4>
            <p>{this.getPlayersData(game)}</p>
          </div>
          <div style={{float: 'right'}}>
            {
              online_friends.map(
                friend => (
                  <img 
                    style={{borderRadius: '50%', margin: 5}}
                    src={friend.avatar} 
                    alt={friend.username}
                    key={friend.username}
                  />
                )
              )
            }
          </div>
        </li>
      );
    }
  }

  getPlayersData = (game) => {
    if (game) {
      const thePlayers = game.attributes.online_friends;
      let theText;
      if (thePlayers.length > 4) {
        theText = `${thePlayers[0].username}, ${thePlayers[1].username} and ${thePlayers.length - 2} others playing now`;
      } else if (thePlayers.length === 3) {
        theText = `${thePlayers[0].username}, ${thePlayers[1].username} and 1 other playing now`;
      } else if (thePlayers.length === 2) {
        theText = `${thePlayers[0].username} and ${thePlayers[1].username} playing now`;
      } else if (thePlayers.length === 1) {
        theText = `${thePlayers[0].username} is playing now`;
      }
      return theText;
    }
  }
  
  render() {
    const { games, showItem } = this.state;
    const filteredGames = this.getFilteredItems();

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Nodes of the 21st century: Play Gamez!</h1>
        </header>
        
        <main>
          <article>
            <div style={{display: 'flex', padding: 20, justifyContent: 'space-around', alignItems: 'center'}}>
              <h2>List of Games</h2>
              <Filtrer
                updateFilter={this.updateFilter}
                placeholder="filter..."
                deleteFilterText={this.deleteFilterText}
                value={this.state.filterValue}
              />
            </div>

            <div className="games-container">
              {filteredGames
                ?
                  filteredGames.map((game, i) => (
                    <GameItem 
                      onClick={() => this.setDetailedItem(game)}
                      key={game.id}
                      game={game}
                    />
                  ))
                : null
              }
            </div>
          </article>
          <aside>
            <h3>What your friends are playing</h3>
            <ul style={{padding: 20}}>
              {games.data.map((game, i) => this.renderGamesOfFriends(game) )}
            </ul>
          </aside>
        </main>

        <GameItemDetailed item={showItem} onClose={() => this.closeDetailedItem()} />
      </div>
    );
  }
}

export default App;
