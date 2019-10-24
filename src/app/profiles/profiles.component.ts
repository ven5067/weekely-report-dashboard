import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/services/dashboard.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  org_chart: Array<any> = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.org_chart = this.dashboardService.dashboardData.org_chart;
  }

}
