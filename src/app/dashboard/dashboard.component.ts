import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartEvent, ChartErrorEvent, GoogleChartComponent } from 'angular-google-charts';
import { Router } from '@angular/router';

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

  public changingChart = {
    title: 'Changing Chart',
    type: 'BarChart',
    data: [['Copper', 8.94], ['Silver', 10.49], ['Gold', 19.3], ['Platinum', 21.45]],
    columnNames: ['Element', 'Density'],
    options: {
      animation: {
        duration: 250,
        easing: 'ease-in-out',
        startup: true
      }
    }
  };

  @ViewChild('chart', { static: true })
  public chart: GoogleChartComponent;

  constructor(private router: Router) {
    this.charts.push({
      title: 'Pie Chart',
      type: 'PieChart',
      columnNames: ['Task', 'Pecentage by Week'],
      data: [['Planned', 40], ['Actual', 60]],
      roles: [],
      body: {
        title: 'Planning',
        description: '<span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> has been completed.</p>'
      }
    });
    this.charts.push({
      title: 'Pie Chart',
      type: 'PieChart',
      columnNames: ['Task', 'Hours per Day'],
      data: [['Planned', 40], ['Actual', 60]],
      roles: [],
      body: {
        title: 'Knowledge Transfer',
        description: '<span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> has been completed.</p>'
      }
    });
    this.charts.push({
      title: 'Pie Chart',
      type: 'PieChart',
      columnNames: ['Task', 'Pecentage by Week'],
      data: [['Planned', 40], ['Actual', 60]],
      roles: [],
      body: {
        title: 'Shadow Support',
        description: '<span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> has been completed.</p>'
      }
    });
    this.charts.push({
      title: 'Pie Chart',
      type: 'PieChart',
      columnNames: ['Task', 'Pecentage by Week'],
      data: [['Planned', 40], ['Actual', 60]],
      roles: [],
      body: {
        title: 'Planning',
        description: '<span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> has been completed.</p>'
      }
    });
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

  public changeChart() {
    this.changingChart.data = [
      ['Copper', Math.random() * 20.0],
      ['Silver', Math.random() * 20.0],
      ['Gold', Math.random() * 20.0],
      ['Platinum', Math.random() * 20.0]
    ];
  }

  public navigateToTest() {
    this.router.navigateByUrl('/test');
  }
  
}
