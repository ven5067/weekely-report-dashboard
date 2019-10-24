import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/services/dashboard.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  applications: any = {};

  constructor(private dashboardService: DashboardService) {
    this.applications = this.dashboardService.dashboardData.applications;
   }

  ngOnInit() {
    console.log('this.dashboardService.dashboardData.applications', this.dashboardService.dashboardData.applications);
    
  }

}
