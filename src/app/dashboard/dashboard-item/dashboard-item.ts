import { Component,Input,input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.css',
  host: {
    class: 'dashboard-item'
  }
})
export class DashboardItem {
// @Input({required:true}) image!: {src: string, alt: string}
// @Input({required:true}) title!:string;
image = input.required<{src: string, alt: string}>();
title = input.required<string>();
}
