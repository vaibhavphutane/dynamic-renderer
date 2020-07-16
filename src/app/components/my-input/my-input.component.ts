import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Types } from 'src/app/constants/type.constant';


@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss']
})
export class MyInputComponent implements OnInit {

  @Input() item: any;
  @Output() addTable = new EventEmitter();
  types = Types;

  constructor() { }

  ngOnInit(): void {
  }

  addAnotherTable(node) {
      this.addTable.emit(node);
  }
}
