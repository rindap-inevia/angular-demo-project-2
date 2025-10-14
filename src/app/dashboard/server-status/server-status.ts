import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
  host: { id: 'server-status' }  
})
export class ServerStatus {
currentStatus = 'online';
}
