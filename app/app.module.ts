import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { GamePanelComponent } from './gamepanel.component';
import { GamePanelOutputComponent } from './gamepaneloutput.component';
import { MainMenuComponent } from './mainmenu.component';
import { GameStartComponent } from './gamestart.component';
import { LeaderBoardComponent } from './leaderboard.component';

import { PlayersService } from './players.service';
import { LeaderBoardService } from './leaderboard.service';

import { AppRoutingModule }     from './app-routing.module';

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
