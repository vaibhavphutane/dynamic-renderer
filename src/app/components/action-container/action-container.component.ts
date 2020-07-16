import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-action-container',
  templateUrl: './action-container.component.html',
  styleUrls: ['./action-container.component.scss']
})
export class ActionContainerComponent implements OnInit {

  @Input() type: string;
  @Input() title: string;
  @Input() actions: string[];
  @Output() actionUpdated: EventEmitter<any> = new EventEmitter();

  showEdit: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  addAction() {
    this.showEdit = true;
  }

  saveAction(event) {
    this.actionUpdated.emit({
        action: event,
        type: this.type
      });
    this.showEdit = false;
  }
}
