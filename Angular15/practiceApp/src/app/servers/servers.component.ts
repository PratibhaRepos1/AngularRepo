import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverStatus: string = 'No server';
  serverName: string = '';
  serverCreated: boolean = false;


  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;

    this.serverStatus = 'Server was created.';
  }

  onUpdateSesrver(event: Event) {
    this.serverName =(<HTMLInputElement>event.target).value;

    // (event.target as HTMLInputElement).value
    console.log();

  }
}
