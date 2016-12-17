import { Component, OnInit } from '@angular/core';

import { Player } from './player';

import { PlayersService } from './players.service';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'my-game-start',
  templateUrl: 'gamestart.component.html',
  styleUrls: [ 'gamestart.component.css' ]
})

export class GameStartComponent implements OnInit {
    players : Player[];

    constructor(private playerService: PlayersService,private router: Router) { }

    ngOnInit(): void {
        this.players = [];
        this.players[0] = new Player('','X');
        this.players[1] = new Player('','O');
    }

    onSubmit() {
        this.playerService.setPlayers(this.players);
        this.router.navigate(['/gamepanel']);
    }
}