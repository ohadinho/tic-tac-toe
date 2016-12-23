import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { GamePanelComponent } from './gamepanel.component';

describe('GamePanelComponent (inline template)', () => {

  let comp:    GamePanelComponent;
  let fixture: ComponentFixture<GamePanelComponent>;  

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ GamePanelComponent ], // declare the test component
    }).compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(GamePanelComponent);            
            comp = fixture.componentInstance;
        });
  });

  it('isValidMove', () => {      
      comp.ngOnInit();
      comp.game.board[0][0] = 'X';
      let isValid = comp.isValidMove(0,0);
      expect(isValid).toBe(false);
  });

});
