import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
//import { dispatchEvent } from '@angular/platform-browser/testing/browser_util';
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

     it('If user does not set players - onSubmit should not execute', () => {
        fixture.detectChanges();
        
        var spy = spyOn(comp, 'onSubmit');

        let submitBtn = fixture.debugElement.nativeElement.querySelector('button');
        submitBtn.click();

        expect(spy.calls.any()).toBe(false, 'onSubmit did not execute');
     });

/*     it('Test input <-> player bindings', () => {
        fixture.detectChanges();

        let playerX = fixture.debugElement.query(By.css('#playerX')).nativeElement;
        playerX.value = 'First';
        let playerO = fixture.debugElement.query(By.css('#playerO')).nativeElement;
        playerO.value = 'Second';
        dispatchEvent(playerX.nativeElement, 'input');
        dispatchEvent(playerO.nativeElement, 'input');
        
        expect(comp.players[0].id).toBe('First');
        expect(comp.players[1].id).toBe('Second');
     });

     it('If user DID set players - onSubmit should execute', () => {
        fixture.detectChanges();

        let playerX = fixture.debugElement.nativeElement.querySelector('#playerX');
        playerX.value = 'First';
        let playerO = fixture.debugElement.nativeElement.querySelector('#playerO');
        playerO.value = 'Second';

        var spy = spyOn(comp, 'onSubmit');

        let submitBtn = fixture.debugElement.nativeElement.querySelector('button');
        submitBtn.click();

        expect(spy.calls.any()).toBe(true, 'onSubmit executed');
     });*/
});
