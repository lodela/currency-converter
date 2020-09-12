import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html'
})
export class USDComponent {
  @Input() yen:number;
  @Output() usd = new EventEmitter<number>();

  yenDisplayText: number;

  constructor() { }

  convertToYen() {
    this.yenDisplayText = (true === !!arguments[0] && !isNaN(arguments[0]))? arguments[0] * 113 : 0;
    this.usd.emit(this.yenDisplayText);
  }

  getYenDisplayText() {
    return 0;
  }
}
