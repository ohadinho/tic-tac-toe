import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { GamePanelComponent } from './gamepanel.component';
import { GamePanelOutputComponent } from '../gamepaneloutput/gamepaneloutput.component';

import { PlayersService } from '../../services/players/players.service';
import { FakePlayersService } from '../../services/players/testing/fake-players.service';
import { LeaderBoardService } from '../../services/leaderboard/leaderboard.service';

import { Player } from '../../models/player/player';

describe('GamePanelComponent (inline template)', () => {

  let comp:    GamePanelComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<GamePanelComponent>;  
  let playersService : PlayersService;
  let playersServiceStub : FakePlayersService;

  beforeEach( async ( () => {

    playersServiceStub = new FakePlayersService();

    TestBed.configureTestingModule({
      declarations: [ GamePanelComponent, GamePanelOutputComponent ], // declare the test component
      providers:    [ { provide: PlayersService, useValue: playersServiceStub }, { provide: LeaderBoardService } ]
    }).compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(GamePanelComponent);            
            comp = fixture.componentInstance;

            // PlayerService actually injected into the component
            playersService = fixture.debugElement.injector.get(PlayersService);
            // PlayersService from the root injector
            playersService = TestBed.get(PlayersService);
        });
  }));

  it('isValidMove', () => {
      comp.ngOnInit();

      // Valid move
      comp.game.board[0][0] = comp.emptyCellSign;      
      let isValid = comp.isValidMove(0,0);
      expect(isValid).toBe(true);

      // Non-valid move
      comp.game.board[0][0] = 'X';      
      isValid = comp.isValidMove(0,0);
      expect(isValid).toBe(false);
  });

  it('setCellSign', () => {      
      fixture.detectChanges();
      comp.ngOnInit();

      // Set cell sign and check that board was updated
      comp.setCellSign(0,0);     
      let isSetted = comp.game.board[0][0] == comp.game.CurrentSign;
      expect(isSetted).toBe(true);
      expect(comp.game.CurrentSign).toBe('X');
      
      // Check if HTML was updated     
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('#cell00'));
      const span = de.nativeElement;    
      expect(span.textContent).toContain(comp.game.CurrentSign);              
  });

  it('switchTurn', () => {
      fixture.detectChanges();
      let turnNumberAfterSwitch = comp.game.currentTurn == 1 ? 0 : 1;

      comp.switchTurn();
      expect(comp.game.currentTurn).toBe(turnNumberAfterSwitch);

      fixture.detectChanges();
      let outputMessageShouldContain = comp.game.CurrentSign + ' Turn';
      de = fixture.debugElement.query(By.css('.outputMessageClass'));
      const div = de.nativeElement;          
      expect(div.textContent).toContain(outputMessageShouldContain);
  });

  it('isBoardFull - True', () => {
      fixture.detectChanges();
      fullBoardTopRowWin('X','O');
      let isBoardFull = comp.isBoardFull();
      expect(isBoardFull).toBe(true);
  });

  it('isBoardFull - False', () => {
      fixture.detectChanges();
      middleRowWin('X','O');
      let isBoardFull = comp.isBoardFull();
      expect(isBoardFull).toBe(false);
  });

  it('checkRowWin - Top row win', () => {
      fixture.detectChanges();
      fullBoardTopRowWin('X','O');
      let isTopRowWin = comp.checkRowWin(0);
      expect(isTopRowWin).toBe(true);
  });

  it('checkRowWin - Middle row win', () => {
      fixture.detectChanges();
      middleRowWin('X','O');
      let isMiddleRowWin = comp.checkRowWin(1);
      expect(isMiddleRowWin).toBe(true);
  });

  // X X X
  // O O X
  // O X O
  function fullBoardTopRowWin(winSign : string, loseSign : string ) {
      comp.game.board[0][0] = winSign;
      comp.game.board[0][1] = winSign;
      comp.game.board[0][2] = winSign;
      comp.game.board[1][0] = loseSign;
      comp.game.board[1][1] = loseSign;
      comp.game.board[1][2] = winSign;
      comp.game.board[2][0] = loseSign;
      comp.game.board[2][1] = winSign;
      comp.game.board[2][2] = loseSign;
  }

  // O O 
  // X X X
  // 
  function middleRowWin(winSign : string, loseSign : string ) {
      comp.game.board[0][0] = loseSign;
      comp.game.board[0][1] = loseSign;
      comp.game.board[1][0] = winSign;
      comp.game.board[1][1] = winSign;
      comp.game.board[1][2] = winSign;
  }

});
