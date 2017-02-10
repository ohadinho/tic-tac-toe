import { Player } from '../player/player';

export class Game {
    board : string[][];
    players : Player[];
    gameOver : boolean;
    currentTurn : number;
    
    constructor(public boardParam:string[][], public playersParam: Player[], public gameOverParam:boolean, public currentTurnParam:number) {
        this.board = boardParam;
        this.players = playersParam;
        this.gameOver = gameOverParam;
        this.currentTurn = currentTurnParam;
    }

    get CurrentSign() : string {
        return this.players[this.currentTurn].sign;
    }

    get CurrentPlayerId() : string {
         return this.players[this.currentTurn].id;
    }
}