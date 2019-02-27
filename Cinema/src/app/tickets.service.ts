import { Injectable } from "@angular/core";
import { from } from 'rxjs/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class TicketsService {

  private seats:Array<boolean> = [true,true,true,true,true,true,true,true,true,true,true,true];

  getSeats():Array<boolean> {
    return this.seats;
  }

}