import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { LiveMarketComponent } from 'src/app/live-market/live-market.component';
import { MarketSerivce } from 'src/app/services/market.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveMarketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    MarketSerivce
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
