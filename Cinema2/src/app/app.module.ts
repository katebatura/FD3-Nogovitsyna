import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StartComponent } from './start.component';
import { HallComponent } from './hall.component';
import { CashComponent } from './cash.component';
import { TicketsService } from './tickets.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    StartComponent, HallComponent, CashComponent
  ],
  providers: [TicketsService],
  bootstrap: [StartComponent]
})
export class AppModule { }
