import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() public label: string;
  @Input() public value: number | string;
  @Input() public unit: number;
  @Output() public valueChanged: EventEmitter<number | string> = new EventEmitter<number | string>();

  constructor() {}

}
