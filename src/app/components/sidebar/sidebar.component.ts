import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/profiles', title: 'Org Chart',  icon:'group', class: '' },
    { path: '/applications', title: 'Applications',  icon:'apps', class: '' },
    { path: '/calendar', title: 'Trasition Calendar',  icon:'schedule', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  startDate = new Date("Sep 30, 2019");
  endDate = new Date("Dec 01, 2019");
  daysCompleted = Math.floor((new Date().getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24));

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);

    const deadline = this.endDate.getTime(); 
    const x = setInterval(function() { 
    const now = new Date().getTime(); 
    const t = deadline - now; 
    const days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    const hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    const seconds = Math.floor((t % (1000 * 60)) / 1000); 
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "; 
      if (t < 0) { 
          clearInterval(x); 
          document.getElementById("timer").innerHTML = "Exceeded";
      } 
    }, 1000); 
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
