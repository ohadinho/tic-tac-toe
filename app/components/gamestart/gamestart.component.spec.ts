import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RouterStub } from '../../../testing';
import { FakePlayersService } from '../../services/players/testing/fake-players.service';

import { GameStartComponent } from './gamestart.component';
import { Player } from '../../models/player/player';
import { PlayersService } from '../../services/players/players.service';

describe('GameStartComponent (inline template)', () => {

    let comp:    GameStartComponent;
    let de: DebugElement;
    let fixture: ComponentFixture<GameStartComponent>;

    beforeEach( async ( () => {
    
        TestBed.configureTestingModule({
                imports:      [ FormsModule ],
                declarations: [ GameStartComponent ],
                providers: [
                    { provide: Router, useClass: RouterStub },
                    { provide: PlayersService, useValue: FakePlayersService }
                ]
            }).compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(GameStartComponent);            
            comp = fixture.componentInstance;
        });
    }));

     it('should tell router to navigate to game panel',
        inject([Router], (router: Router) => { // ...
            fixture.detectChanges();
            const spy = spyOn(router, 'navigateByUrl');

            comp.navigateToGamePanel();

            // args passed to router.navigateByUrl()
            const navArgs = spy.calls.first().args[0];

            expect(navArgs).toBe('/gamepanel',
            'should nav to gamepanel');
     }));
});