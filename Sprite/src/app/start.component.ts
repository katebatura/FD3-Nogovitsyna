import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'start',
  templateUrl: 'start.component.html',
  styleUrls: ['start.component.css']
})
export class StartComponent {

  private url:string = "http://fe.it-academy.by/Examples/cards2.png";

  private offsetX:number;

  private offsetY:number;

  private width:number = 144;

  private height:number = 193;

  constructor() {
    this.offsetX = this.newOffsetX();

    this.offsetY = this.newOffsetY();
  };

  getUrl():string {
    return this.url;
  }

  getWidth():number {
    return this.width;
  }

  getHeight():number {
    return this.height;
  }

  randomDiap(n:number, m:number) {
    return Math.floor(
      Math.random() * (m - n + 1)
    ) + n;
  }

  newOffsetX():number {
    let x:number = this.randomDiap(0,3);
    let num:number = 144 * x;
    return num;
  }

  newOffsetY():number {
    let x:number = this.randomDiap(0,12);
    let num:number = -193.5 * x;
    return num;
  }

  getOffsetX():number {
    return this.offsetX;
  }
  
  getOffsetY():number {
    return this.offsetY;
  }

  getNewCard():void {
    this.offsetX = this.newOffsetX();

    this.offsetY = this.newOffsetY();
  }

}
