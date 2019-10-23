import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Completed',     50],
          ['Inprogress',      30],
          ['Commute',  20]
        ]);

        var options = {
          title: 'Digital Product Operations',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d0'));
        chart.draw(data, options);

      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
      
      var data1 = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     30],
        ['Eat',      40],
        ['Commute',  30]
      ]);

        var chart1 = new google.visualization.PieChart(document.getElementById('piechart_3d1'));
        chart1.draw(data1, options);

      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

        var chart2 = new google.visualization.PieChart(document.getElementById('piechart_3d2'));
        chart2.draw(data, options);

      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var chart3 = new google.visualization.PieChart(document.getElementById('piechart_3d3'));
      chart3.draw(data, options);
      }

  }

}
