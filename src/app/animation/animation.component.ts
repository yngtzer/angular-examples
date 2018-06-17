import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('warning', style({
        'background-color': 'orange',
        transform: 'translateX(100px)'
      })),
      transition('normal => warning', animate(300)),
      transition('warning => normal', animate(800))
    ]),
    trigger('divStateV2', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('warning', style({
        'background-color': 'orange',
        transform: 'translateX(100px)'
      })),
      state('shrink', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => warning', animate(300)),
      transition('warning => normal', animate(800)),
      transition('shrink <=> *', [
        animate(2000, style({
          'border-radius': '20px',
          'background-color': 'pink'
        })),
        animate(1000)
      ])
    ]),
    trigger('animateList', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(400)
      ]),
      transition('* => void', [
        animate(500, style({
          opacity: 0,
          transform: 'translateX(100px)'
        }))
      ])
    ]),
    trigger('animateList2', [
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            opacity: 0,
            transform: 'translateX(100px)'
          }))
        ])
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {

  state = 'normal';
  stateV2 = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  constructor() { }

  onTransform() {
    this.state = this.state === 'normal' ? 'warning' : 'normal' ;
    this.stateV2 = this.stateV2 === 'normal' ? 'warning' : 'normal' ;
  }

  onShrink() {
    this.stateV2 = 'shrink';
  }

  onAdd(item) {
    console.log('item' + item);
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  ngOnInit() {
  }

}
