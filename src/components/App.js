import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Board from './Board';
import initialPieces from '../init-pieces';
import { getAvailableMoves } from '../chess_logic';

class App extends Component {

  constructor() {
    super();

    this.killPiece = this.killPiece.bind(this);
    this.selectPiece = this.selectPiece.bind(this);

    this.state = {
      selectedPiece : null,
      pieces: initialPieces,
      graveyard: {
        team1: [],
        team2: []
      }
    }
  }

  killPiece(piece) {
    const pieces = {...this.state.pieces};
    const graveyard = {...this.state.graveyard};

    Object.keys(pieces['team1']).forEach((k) => {
      if (pieces['team1'][k].id === piece.id) {
        piece.position = null;
        pieces['team1'][k] = piece;
        graveyard['team1'].push(piece);
      }
    });

    Object.keys(pieces['team2']).forEach((k) => {
      if (pieces['team2'][k].id === piece.id) {
        piece.position = null;
        pieces['team2'][k] = piece;
        graveyard['team2'].push(piece);
      }
    });
    
    this.setState({
      pieces,
      graveyard
    });
  }

  selectPiece(piece) {
    const team1 = this.state.pieces['team1'];
    const team2 = this.state.pieces['team2'];
    piece.availableMoves = getAvailableMoves(team1, team2, piece, true);

    console.log(piece);

    // override the selected piece
    this.setState({
      selectedPiece: piece
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Board 
          pieces={this.state.pieces} 
          style={{float: 'left'}}
          graveyard={this.state.graveyard}
          selectPiece={this.selectPiece}
          selectedPiece={this.state.selectedPiece} />
      </div>
    );
  }
}

export default App;
