import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-output',
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
})
export class CounterOutputComponent {
  count$: Observable<number>;


  constructor(private store: Store<{counter: number}>) {
    this.count$ = store.select('counter');
   
  }

  

  
}
