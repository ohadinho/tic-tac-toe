import { Injectable } from '@angular/core';

import { Player } from '../../models/player/player';

@Injectable()
export class PlayersService {

  players : Player[];

  getPlayers() : Player[] {
    return this.players;
  }

  setPlayers(playersParam : Player[]) : void {
    this.players = playersParam;
  }
}