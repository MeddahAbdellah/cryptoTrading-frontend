import { Component, OnInit } from '@angular/core';
import { MarketSerivce } from 'src/app/services/market.service';

@Component({
  selector: 'app-live-market',
  templateUrl: './live-market.component.html',
  styleUrls: ['./live-market.component.scss']
})
export class LiveMarketComponent implements OnInit {

  constructor(marketService: MarketSerivce) {
    marketService.listenToMarket();
  }

  ngOnInit() {
  }
}
