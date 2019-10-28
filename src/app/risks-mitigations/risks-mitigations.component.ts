import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/services/dashboard.service';

@Component({
  selector: 'app-risks-mitigations',
  templateUrl: './risks-mitigations.component.html',
  styleUrls: ['./risks-mitigations.component.scss']
})
export class RisksMitigationsComponent {

  risks_mitigations = {};
  objectKeys = Object.keys;

  constructor(
    private dashboardService: DashboardService
  ) {
    this.risks_mitigations = this.dashboardService.dashboardData.risks_mitigations;
  }

  public isArray(val) {
    return Array.isArray(val);
  } 

}
