import { Component } from '@angular/core';
import { TicketsService } from './tickets.service';

@Component({
  moduleId: module.id,
  selector: 'hall',
  templateUrl: 'hall.component.html',
  styleUrls: ['hall.component.css']
})
export class HallComponent {

  private newSeats:Array<string>;
    
  constructor(events:TicketsService) {
    events.getSeats()
      .subscribe((seats:Array<boolean>) => {this.makeNewSeats(seats)})
  }

    
  makeNewSeats(seats:Array<boolean>):void {  
    console.log(seats)
    this.newSeats = seats.map(s => {
      if(s) {
        return 'green';
      } else{
        return 'red';
      }
    });
  };

  showSeats():Array<string> {
    return this.newSeats;
  }

}