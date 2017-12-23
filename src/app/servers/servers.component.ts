import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created..";
  serverName = "Test";
  userName = "";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000 )
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server created!!! Name==> "+ this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUserNameInput(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onReset() {
    this.userName = "";
  }
}
