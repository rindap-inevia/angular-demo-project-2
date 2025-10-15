import { Component,OnDestroy,OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
  host: { id: 'server-status' }  
})
export class ServerStatus implements OnInit, OnDestroy {
currentStatus:'online' | 'offline' | 'unknown' = 'offline';
ngOnInit () {
setInterval (() =>{
const rnd = Math. random (); // 0 - 0. 99999999999999
if (rnd < 0.5) {
this.currentStatus = 'online';
} else if (rnd < 0.9) {
this.currentStatus = 'offline';
} else {
this.currentStatus = 'unknown';
}
}, 5000);
}

ngAfterViewInit() {
console.log ('AFTER VIEW INIT' );}
ngOnDestroy (){}

}
