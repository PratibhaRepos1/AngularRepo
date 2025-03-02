import { Component, signal, WritableSignal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  imports: [],
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.css'
})
export class SignalExampleComponent {
  //Define the a signal with an initial value
  count: WritableSignal<number> = signal(0);
  doubleCount = computed(()=> this.count() *2);

  constructor() {
    // Subscribe to the signal and  Effect runs whenever `count` changes
    effect(() => {
      console.log(`The count is now: ${this.count()}`);
      console.log(`The doubleCount is now: ${this.doubleCount()}`);
    });
  }


  //function to update the signal
  increment() {
    // Increment the count by 1.
    this.count.update(value => value + 1);
  }

}
