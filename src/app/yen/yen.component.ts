import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-yen',
  templateUrl: './yen.component.html'
})
export class YenComponent {
  @Input() yenConverted:number;
  @Output() yenToUsd = new EventEmitter<number>();

  usdDisplayText: number;

  constructor() { }

  convertToUsd() {
    this.usdDisplayText = (true === !!arguments[0] && !isNaN(arguments[0]))? arguments[0] * 0.0089 : 0;
    this.yenToUsd.emit(this.usdDisplayText);
  }

  getUsdDisplayText() {
      return 0;
  }
}
