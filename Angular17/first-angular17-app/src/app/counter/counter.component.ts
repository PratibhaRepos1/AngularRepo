import { Component, OnInit, signal } from '@angular/core';
import { SignalService } from './signal.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
   
   counter!: number;

   constructor(private signalService: SignalService) {}

   ngOnInit():void {
    this.signalService.counter$.subscribe(counter => {
      this.counter = counter;
    })
   }

    // Method to increment the counter
    increment() {
      this.signalService.increment();
    }

     // Method to decrement the counter
     decrement() {
      this.signalService.decrement();
     }

}
