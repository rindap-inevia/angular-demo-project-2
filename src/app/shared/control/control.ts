import { Component,ElementRef,HostBinding,HostListener,inject,input, ViewEncapsulation  } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
     '(click)': 'onClick()'
  }
})
export class Control {
  // @HostBinding('class') className = 'control';
label = input.required<string>();
private el = inject(ElementRef);
 //@HostListener('click')
   onClick() {
 console.log(" clicked");
 console.log(this.el);
}
}
