import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/observable';
import { from } from 'rxjs/observable/from';

@Injectable()
export class TicketsService {

  private seats:Array<boolean> = [true,true,true,true,true,true,true,true,true,true,true,true];
  private seatsObs$:Observable<Array<boolean>>;

  constructor() {
    //this.seatsObs$ = new Observable<Array<boolean>>();
    this.seatsObs$ = from([this.seats]);
  }

  getSeats():Observable<Array<boolean>> {
    this.seatsObs$ = from([this.seats]);
    console.log(this.seatsObs$);
    return this.seatsObs$;
  }

  getVacancy():number {
    let vacancy = this.seats.filter(s => s == true);
    return vacancy.length;
  }

  getTotal():number {
    return this.seats.length;
  }

  orderTicket(qty:number):Array<number> {
    let order:Array<number> = [];
    let l = this.seats.length;

    for(let i = 0; i < l; i++) {

      if(order.length == 0 && i + qty <= l) {
        let newSeats:Array<boolean> = this.seats.slice(i, i + qty);

        if(newSeats.every(s => s == true)) {
          for(let n = 1; n <= qty; n++) {
            order.push(i + n);
          };
        }

      }
    };

    if(order.length) order.forEach(s => this.seats[s -1] = false);

    this.getSeats();

    return order;
  }

}