import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartEvent, ChartErrorEvent, GoogleChartComponent } from 'angular-google-charts';
import { Router } from '@angular/router';
import { DashboardService } from 'app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public charts: Array<{
    title: string;
    type: string;
    data: Array<Array<string | number | {}>>;
    roles: Array<{ type: string; role: string; index?: number }>;
    columnNames?: Array<string>;
    options?: {};
    body?: {}
  }> = [];

  public tasks: Array<any> = [];
  public objectKeys = Object.keys;

  @ViewChild('chart', { static: true })
  public chart: GoogleChartComponent;

  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) {
    this.charts = this.dashboardService.dashboardData.dashboard.charts;
    this.tasks = this.dashboardService.dashboardData.dashboard.tasks;
  }

  public onReady() {
    console.log('Chart ready');
  }

  public onError(error: ChartErrorEvent) {
    console.error('Error: ' + error.message.toString());
  }

  public onSelect(event: ChartEvent) {
    console.log('Selected: ' + event.toString());
  }

  public onMouseEnter(event: ChartEvent) {
    console.log('Hovering ' + event.toString());
  }

  public onMouseLeave(event: ChartEvent) {
    console.log('No longer hovering ' + event.toString());
  }

  public ngOnInit() {
    console.log(this.chart);
  }

  public navigateToTest() {
    this.router.navigateByUrl('/test');
  }

  public isArray(val) {
    return Array.isArray(val);
  }
  
}
