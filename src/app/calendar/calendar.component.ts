import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/services/dashboard.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendar: any = {};
  objectKeys = Object.keys;

  constructor(
    private dashboardService: DashboardService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.calendar = this.dashboardService.dashboardData.transition_calendar;
  }

}
