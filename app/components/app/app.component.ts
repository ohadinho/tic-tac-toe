import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
             <nav>
                 <a routerLink="/mainmenu" routerLinkActive="active">Main menu</a>
                 <a routerLink="/gamestart" routerLinkActive="active">New Game</a>
                 <a routerLink="/leaderboard" routerLinkActive="active">Leader board</a>
             </nav>
             <router-outlet></router-outlet>`,             
  styleUrls: [ 'app.component.css' ],
})

export class AppComponent { 
  title = 'Tic-Tac-Toe';
}
