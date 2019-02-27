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

    makeOrder(a) {
        console.log(a)
    }
}