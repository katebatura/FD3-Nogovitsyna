import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StartComponent } from './start.component';
import { SpriteComponent } from './sprite.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    StartComponent, SpriteComponent
  ],
  providers: [],
  bootstrap: [StartComponent]
})
export class AppModule { }
