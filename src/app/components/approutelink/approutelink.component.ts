import { Component, Input, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'approutelink',
  template: `<a [@hoverState]="isHover" (mouseenter)="mouseEnter()"  (mouseleave)="mouseLeave()" routerLink="{{routerLink}}" routerLinkActive="active">{{title}}</a>`,
  styleUrls: [ 'approutelink.component.css' ],
  animations : [
    trigger('hoverState', [
      state('false', style({
        transform: 'scale(1)'
      })),
      state('true',   style({
        transform: 'scale(1.3)'
      })),
      transition('false <=> true', animate('200ms ease-in-out'))
    ])
  ]
})

export class AppRouteLinkComponent { 
  @Input()
  title : String;

  @Input()
  routerLink : String;

  isHover : String;

  ngOnInit(): void {
    this.isHover = "false";
  }

  mouseEnter() {
      this.isHover = "true"; 
  }

  mouseLeave() {
      this.isHover = "false"; 
  }
}
