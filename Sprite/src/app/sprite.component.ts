import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'sprite.component.html',
  styleUrls: ['sprite.component.css']
})
export class SpriteComponent {

  @Input("url")
  private url:string;

  @Input("offset-x")
  private offsetX:number;
  
  @Input("offset-y")
  private offsetY:number;
  
  @Input("width")
  private width:number;

  @Input("height")
  private height:number;

  @Output("clicked")
  private clicked:EventEmitter<boolean>=new EventEmitter<boolean>();
  
  getUrl():string {
    return 'url(' + this.url + ')';
  }
  
  getPosition():string {
    return this.offsetX + 'px' + ' ' + this.offsetY + 'px';
  }
    
  getWidth():number {
    return this.width;
  }
  
  getHeight():number {
    return this.height;
  }

  showNewCard():void {
    this.clicked.emit();
  }

}
