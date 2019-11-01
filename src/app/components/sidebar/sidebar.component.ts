import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/services/dashboard.service';

declare const $: any;
declare interface RouteInfo {
    id: string;
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { id: 'dashboard', path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { id: 'orgChart', path: '/org-chart', title: 'Org Chart',  icon:'group', class: '' },
    { id: 'applications', path: '/applications', title: 'Applications',  icon:'apps', class: '' },
    { id: 'calendar', path: '/calendar', title: 'Trasition Calendar',  icon:'schedule', class: '' },
    { id: 'risksMitigations', path: '/risks-mitigations', title: 'Risks & Mitigations',  icon:'rowing', class: '' },
    { id: 'observations', path: '/observations', title: 'Observations & Improvements ',  icon:'search', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  startDate = new Date("Sep 30, 2019");
  endDate = new Date("Dec 02, 2019");
  daysCompleted = Math.floor((new Date().getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24));

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => {
      if(!this.dashboardService.dashboardData.features[menuItem.id]) return false;
      return true;
    });

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
