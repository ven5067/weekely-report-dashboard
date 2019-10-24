import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from 'app/table-list/table-list.component';
import { ProfilesComponent } from 'app/profiles/profiles.component';
import { CalendarComponent } from 'app/calendar/calendar.component';

export const AdminLayoutRoutes: Routes = [
   
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'profiles',   component: ProfilesComponent },
    { path: 'applications', component: TableListComponent},
    { path: 'calendar', component: CalendarComponent }
];
