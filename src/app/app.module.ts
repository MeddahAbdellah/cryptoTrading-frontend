import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { LiveMarketComponent } from 'src/app/live-market/live-market.component';
import { MarketSerivce } from 'src/app/services/market.service';
import { BotControlPanelComponent } from './bot-control-panel/bot-control-panel.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { ExpertAdvisorListComponent } from './expert-advisor-list/expert-advisor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveMarketComponent,
    BotControlPanelComponent,
    InputComponent,
    ExpertAdvisorListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    FormsModule,
  ],
  providers: [
    MarketSerivce
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
