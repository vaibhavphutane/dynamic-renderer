import { Component, OnInit } from '@angular/core';
import { isArray } from 'util';
import { TypeScriptEmitter } from '@angular/compiler';
import { Types } from 'src/app/constants/type.constant';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-dynamic-renderer',
  templateUrl: './dynamic-renderer.component.html',
  styleUrls: ['./dynamic-renderer.component.scss']
})
export class DynamicRendererComponent implements OnInit {

  data: any;
  inputType: string;
  types = Types;

  constructor() { }

  ngOnInit(): void {
    this.inputType = 'password';
   this.data = {
      nodeOne: 'John Doe',
      nodeTwo: '05/06/2020',
      nodeThree: 777,
      nodeFour: [
          {elementOne: 'B Street'},
          {elementTwo: 'City'},
          {elementThree: 'Area - 591323'},
          {elementFour: [
              {elementFive: '06/07/2020'},
              {elementSix: 123}
          ]}
      ]
    };
  }

  addTableEvent(node) {
    this.data[node.key] = node.value;
    this.data = {...this.data}
  }

 originalOrder(a: KeyValue<number,string>, b: KeyValue<number,string>): number {
    return 0;
  }
}
