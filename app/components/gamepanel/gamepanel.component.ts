import { Component, OnInit } from '@angular/core';

import { Game } from '../../models/game/game';
import { Player } from '../../models/player/player';

import { PlayersService } from '../../services/players/players.service';
import { LeaderBoardService } from '../../services/leaderboard/leaderboard.service';

@Component({
  moduleId: module.id,
  selector: 'my-game-panel',
  templateUrl: 'gamepanel.component.html',
  styleUrls: [ 'gamepanel.component.css' ]
})

export class GamePanelComponent implements OnInit {
  game: Game;
  outputMessage: string;

  constructor(private playerService: PlayersService, private leaderBoardService: LeaderBoardService) { }

  initGame(): void {
 // this.game = {
 //     board : [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']],
 //     signs : ['X', 'O'],
 //     gameOver : false,
 //     currentTurn : 0
 //   }
    let initialBoard = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    let initialPlayers = this.playerService.getPlayers();
    let initialGameOver = false;
    let initialCurrentTurn = 0;
    this.game = new Game(initialBoard, initialPlayers, initialGameOver, initialCurrentTurn);
    this.setOutputCurrentTurn();    
  }

  ngOnInit(): void {
    this.initGame();
  }

  cellClick(i : number,j : number): void {
    // If game ended - don't allow click on cell (that means - return the same state)
    if(this.game.gameOver)
      return;

    // If it's not a valid move (cell is not empty) - don't allow
    if(!this.isValidMove(i,j))
    {
      this.outputMessage = 'Cell already taken!';
      return;
    }

    // Clear previous output message
    this.outputMessage = '';

    // Setting cell sign on board according to cell clicked & current sign
    this.setCellSign(i,j);

    // Checking if game is over. Win or Tie.
    this.checkGameOver();

    // If gameOver prop is true - game is over
    if(this.game.gameOver)
      return;

    // Switch turn
    this.switchTurn();            
  }

  isValidMove(i : number,j : number) : Boolean { 
    return this.game.board[i][j] == ' ';
  }

  // Setting cell sign on board according to cell clicked (i,j) & current sign
  setCellSign(i : number,j : number) : void {
    // Setting clicked cell with current sign
    this.game.board[i][j] = this.game.CurrentSign; 
  }

  checkGameOver() : Boolean {
    let isPlayerWon = this.isWin();  
    if(isPlayerWon)
    {    
      this.game.gameOver = true;    
      this.outputMessage = this.game.CurrentPlayerId + ' Won!';
      this.leaderBoardService.setLeader(this.game.CurrentPlayerId);
      return true;    
    }
    else
    {
      let isTie = this.isBoardFull();
    
        if(isTie)
        {
          this.game.gameOver = true;
          this.outputMessage = 'Tie game!';
          return true;
        }
    }

    return false;  
  }

 switchTurn() : void {  
    this.game.currentTurn = (this.game.currentTurn + 1) % this.game.players.length;
    this.setOutputCurrentTurn();
  }

  setOutputCurrentTurn() : void {
    this.outputMessage = this.game.CurrentPlayerId + ' - ' + this.game.CurrentSign + ' Turn';
  }

  // Returns true whether board game is full
  isBoardFull() : Boolean {
    let rows = 3;
    let columns = 3;
    
    // We use for loop instead of map (because with map we can't break loop with "return")
    for(let i=0;i<rows;i++)
      for(let j=0;j<columns;j++)    
        if(this.game.board[i][j] == ' ')
          return false;       
    
    return true;
  }

  checkRowWin(rowIndex : number) : Boolean {
    return this.game.board[rowIndex][0] != ' ' && this.game.board[rowIndex][0] == this.game.board[rowIndex][1] 
    && this.game.board[rowIndex][1] == this.game.board[rowIndex][2];
  }

  checkColumnWin(columnIndex : number) : Boolean {
    return this.game.board[0][columnIndex] != ' ' && this.game.board[0][columnIndex] == this.game.board[1][columnIndex] 
    && this.game.board[1][columnIndex] == this.game.board[2][columnIndex];
  }

// Returns true if there is a win on board
  isWin() : Boolean {    
  let firstRowWin = this.checkRowWin(0);
  let secondRowWin = this.checkRowWin(1);
  let thirdRowWin = this.checkRowWin(2);
  let rowWin = firstRowWin || secondRowWin || thirdRowWin;
  
  let firstColumnWin = this.checkColumnWin(0);
  let secondColumnWin = this.checkColumnWin(1);
  let thirdColumnWin = this.checkColumnWin(2);
  let columnWin = firstColumnWin || secondColumnWin || thirdColumnWin;
  
  let firstDiagonalWin = this.game.board[0][0] != ' ' && (this.game.board[0][0] == this.game.board[1][1]) && (this.game.board[1][1] == this.game.board[2][2]);
  let secondDiagonalWin = this.game.board[2][0] != ' ' && (this.game.board[2][0] == this.game.board[1][1]) && (this.game.board[1][1] == this.game.board[0][2]);
  let diagonalWin = firstDiagonalWin || secondDiagonalWin;
  
  return rowWin || columnWin || diagonalWin;
 }
}