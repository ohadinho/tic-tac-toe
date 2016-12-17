import { Component, OnInit } from '@angular/core';

import { Leader } from './leader';

import { LeaderBoardService } from './leaderboard.service';

@Component({
  moduleId: module.id,
  selector: 'my-leader-board',
  templateUrl: 'leaderboard.component.html',
  styleUrls: [ 'leaderboard.component.css' ]
})

export class LeaderBoardComponent implements OnInit {
    sortedLeaders : Leader[];

    constructor(private leaderBoardService: LeaderBoardService) { }

    ngOnInit(): void {
       this.sortedLeaders = this.leaderBoardService.getTopLeaders();
    }
}