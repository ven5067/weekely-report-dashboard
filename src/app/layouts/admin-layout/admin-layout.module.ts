import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { GoogleChartsModule } from 'angular-google-charts';
import { TableListComponent } from 'app/table-list/table-list.component';
import { ProfilesComponent } from 'app/profiles/profiles.component';
import { CalendarComponent } from 'app/calendar/calendar.component';
import { NotificationsComponent } from 'app/notifications/notifications.component';
import { RisksMitigationsComponent } from 'app/risks-mitigations/risks-mitigations.component';
import { ObservationsComponent } from 'app/observations/observations.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    GoogleChartsModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    ProfilesComponent,
    TableListComponent,
    CalendarComponent,
    NotificationsComponent,
    RisksMitigationsComponent,
    ObservationsComponent
  ]
})

export class AdminLayoutModule {}
