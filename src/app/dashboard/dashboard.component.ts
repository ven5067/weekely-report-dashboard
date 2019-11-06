import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChartEvent, ChartErrorEvent, GoogleChartComponent } from 'angular-google-charts';
import { Router } from '@angular/router';
import { DashboardService } from 'app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  public charts: Array<{
    title: string;
    type: string;
    data: Array<Array<string | number | {}>>;
    roles: Array<{ type: string; role: string; index?: number }>;
    columnNames?: Array<string>;
    options?: {};
    body?: {}
  }> = [];

  public charts$;

  public tasks: Array<any> = [];
  public objectKeys = Object.keys;

  @ViewChild('chart', { static: true })
  public chart: GoogleChartComponent;

  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) {
    this.charts$ = this.dashboardService.charts$;
  }

  ngAfterViewInit() {}

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
    
  }

  public navigateToTest() {
    this.router.navigateByUrl('/test');
  }

  public isArray(val) {
    return Array.isArray(val);
  }
  
}
