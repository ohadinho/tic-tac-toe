import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-game-panel-output',
  templateUrl: 'gamepaneloutput.component.html',
  styleUrls: [ 'gamepaneloutput.component.css' ]
})

export class GamePanelOutputComponent {
    @Input()
    message: string;
}