import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StartComponent } from './start.component';
import { NumwordPipe } from './numword.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ StartComponent, NumwordPipe
  ],
  providers: [],
  bootstrap: [StartComponent]
})
export class AppModule { }
