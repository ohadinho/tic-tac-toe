import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from '../../components/app/app.component';
import { GamePanelComponent } from '../../components/gamepanel/gamepanel.component';
import { GamePanelOutputComponent } from '../../components/gamepaneloutput/gamepaneloutput.component';
import { MainMenuComponent } from '../../components/mainmenu/mainmenu.component';
import { GameStartComponent } from '../../components/gamestart/gamestart.component';
import { LeaderBoardComponent } from '../../components/leaderboard/leaderboard.component';

import { PlayersService } from '../../services/players/players.service';
import { LeaderBoardService } from '../../services/leaderboard/leaderboard.service';

import { AppRoutingModule }     from '../../modules/app-routing/app-routing.module';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule ],
  declarations: [ AppComponent,
                 GamePanelComponent,
                 GamePanelOutputComponent,
                 MainMenuComponent,
                 GameStartComponent,
                 LeaderBoardComponent ],
  providers: [ PlayersService,
               LeaderBoardService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
