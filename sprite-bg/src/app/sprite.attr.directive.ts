import {  Directive, ElementRef, Input, Attribute, AfterViewInit , HostBinding } from "@angular/core"; 

@Directive({ 
  selector: "[sprite]", 
}) 
export class Sprite { 

  public url:string;
  private offsetX:number;
  private offsetY:number;
  private width:number;
  private height:number;

  constructor(@Attribute("sprite-url") _url:string,
  @Attribute("sprite-offset-x") _offsetX:number,
  @Attribute("sprite-offset-y") _offsetY:number,
  @Attribute("sprite-width") _width:number,
  @Attribute("sprite-height") _height:number,
  ) {
    this.url = _url;
    this.offsetX = _offsetX || -100;
    this.offsetY = _offsetY || -25;
    this.width = _width || 25;
    this.height = _height || 25;

    this.showSprite();
  } 

  @HostBinding("style.backgroundImage") 
  private hostBgImg:string;
  
  @HostBinding("style.width") 
  private hostWidth:string;
  
  @HostBinding("style.height") 
  private hostHeight:string;
  
  @HostBinding("style.backgroundPosition") 
  private hostBgPos:string;

  showSprite():void {    
    this.hostBgImg = 'url(' + this.url + ')';
    this.hostWidth = this.width + 'px';
    this.hostHeight = this.height + 'px';
    this.hostBgPos = this.offsetX + 'px' + ' ' + this.offsetY + 'px';
  }

}
