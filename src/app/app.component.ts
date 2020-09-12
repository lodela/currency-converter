import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'Currency Converter';
  yenConverted:number;
  usdConverted:number;

  onYenDisplay(yen:number){
    this.yenConverted = yen;
  }
  onUsdDisplay(usd:number){
    this.usdConverted = usd;
  }
}
