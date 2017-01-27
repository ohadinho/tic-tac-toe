export { Player } from '../../../models/player/player';
export { PlayersService } from '../players.service';

import { Player } from '../../../models/player/player';
import { PlayersService } from '../players.service';

export class FakePlayersService implements PlayersService {

  players : Player[];

  constructor() {
    this.players = [];
    this.players[0] = new Player('Test','X');
    this.players[1] = new Player('Test2','O');
  }

  getPlayers() : Player[] {
    return this.players;
  }

  setPlayers(playersParam : Player[]) : void {
    this.players = playersParam;
  }
}