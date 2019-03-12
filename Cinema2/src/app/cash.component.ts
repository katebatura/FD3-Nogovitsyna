import { Component } from '@angular/core';
import { TicketsService } from './tickets.service';

@Component({
  moduleId: module.id,
  selector: 'cash',
  templateUrl: 'cash.component.html',
  styleUrls: ['cash.component.css']
})
export class CashComponent {
  
    constructor(private tickets:TicketsService) {
    }

    makeOrder(s:string) {
        let qty = +s;
        let order = this.tickets.orderTicket(qty);
        if(!order.length) {
          console.log("К сожалению, выбранного вами количества мест рядом уже нет");
          return
        };

        let seats = '';
        let l = order.length;
        for(let i = 0; i < l; i++) {
          seats += order[i] + '; '
        }        
        console.log('ваши места: ' + seats)
    }
}