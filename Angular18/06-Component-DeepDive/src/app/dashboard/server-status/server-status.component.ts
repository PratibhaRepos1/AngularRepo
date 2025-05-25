import { Component, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
currentStatus =  signal<'online' | 'offline' | 'unknown'>('offline');
private interval?: ReturnType<typeof setInterval>;

 constructor() {
  effect(()=> {
    console.log(this.currentStatus());
  });
  
 }

 ngOnInit() {
    setInterval(() => {
    const rnd = Math.random(); // 0 - 0.999999999
    if(rnd < 0.5) {
       this.currentStatus.set('online');
    } else if (rnd < 0.9) {
      this.currentStatus.set('offline');
    } else {
      this.currentStatus.set('unknown');
    }

  }, 5000);
 }

 ngAfterViewInit() {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  console.log("After View INIT");

 }

 ngOnDestroy() {
  clearTimeout(this.interval);
  
 }
}
