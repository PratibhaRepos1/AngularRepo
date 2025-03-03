import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MystandaloneComponent } from "./mystandalone/mystandalone.component";
import { SignalExampleComponent } from "./signal-example/signal-example.component";
import { PipeExampleComponent } from "./pipe-example/pipe-example.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalExampleComponent, PipeExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
