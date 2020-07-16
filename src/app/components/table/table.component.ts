import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyInputComponent } from '../my-input/my-input.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() dataArray: any[];
  @Output() viewNestedTable = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  viewTable(node) {
    this.viewNestedTable.emit(node);
  }

  get originalOrder() {
    return 0;
  }

}
