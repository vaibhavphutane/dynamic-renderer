import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  wentWellAction = [];
  improve: string[];
  start: string[];
  action: string[];
  actionArray: {type: string, title: string, arr: string[]}[];

  constructor() { }

  ngOnInit() {
    this.actionArray = [
      {
        type: 'wentWell',
        title: 'What went well?',
        arr: this.wentWellAction
      },
      {
        type: 'improve',
        title: 'What can be improved?',
        arr: this.improve,
      },
      {
        type: 'sart',
        title: 'Start doing',
        arr: this.start
      },
      {
        type: 'action',
        title: 'Action item',
        arr: this.action
      }
    ];
    this.wentWellAction = [];
    this.improve = [];
    this.start = [];
    this.action = [];

  }

  addAction(event) {
    console.log(event);
    switch (event.type) {
      case 'wentWell':
        this.wentWellAction.push(event.action);
        const tempWentWell = [...this.wentWellAction];
        this.wentWellAction = tempWentWell;
        this.actionArray.find(item => item.type === event.type).arr = tempWentWell;
        break;
      case 'improve':
        this.improve.push(event.action);
        const tempImprove = [...this.improve];
        this.improve = tempImprove;
        break;
      case 'start':
        this.start.push(event.action);
        const tempstart = [...this.start];
        this.start = tempstart;
        break;
      case 'action':
        this.action.push(event.action);
        const tempaction = [...this.action];
        this.action = tempaction;
        break;
    }
    console.log(event);

  }
}
