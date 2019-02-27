import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StartComponent } from './start.component';
import { Sprite } from './sprite.attr.directive';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    StartComponent, Sprite
  ],
  providers: [],
  bootstrap: [StartComponent]
})
export class AppModule { }
