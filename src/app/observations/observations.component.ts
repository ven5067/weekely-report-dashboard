import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/services/dashboard.service';

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.scss']
})
export class ObservationsComponent implements OnInit {

  observations: any = {};

  constructor(private dashboardService: DashboardService) {
    this.observations = this.dashboardService.dashboardData.observations;
   }

  ngOnInit() {}

}
