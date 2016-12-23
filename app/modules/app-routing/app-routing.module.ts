import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamePanelComponent } from '../../components/gamepanel/gamepanel.component';
import { GameStartComponent } from '../../components/gamestart/gamestart.component';
import { MainMenuComponent } from '../../components/mainmenu/mainmenu.component';
import { LeaderBoardComponent } from '../../components/leaderboard/leaderboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainmenu', pathMatch: 'full' },
  { path: 'gamepanel',  component: GamePanelComponent },
  { path: 'mainmenu', component: MainMenuComponent },
  { path: 'gamestart',  component: GameStartComponent },
  { path: 'leaderboard',  component: LeaderBoardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}