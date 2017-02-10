import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
             <nav>
                 <approutelink [title]="'Main Menu'" [routerLink]="'/mainmenu'"></approutelink>
                 <approutelink [title]="'New Game'" [routerLink]="'/gamestart'"></approutelink>                 
                 <approutelink [title]="'Leader board'" [routerLink]="'/leaderboard'"></approutelink>
             </nav>
             <router-outlet></router-outlet>`,             
  styleUrls: [ 'app.component.css' ],
})

export class AppComponent { 
  title = 'Tic-Tac-Toe';
}
