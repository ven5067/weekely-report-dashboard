import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from 'app/table-list/table-list.component';
import { ProfilesComponent } from 'app/profiles/profiles.component';
import { CalendarComponent } from 'app/calendar/calendar.component';
import { RisksMitigationsComponent } from 'app/risks-mitigations/risks-mitigations.component';
import { ObservationsComponent } from 'app/observations/observations.component';
import { AchievementFocusComponent } from 'app/achievement-focus/achievement-focus.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'org-chart', component: ProfilesComponent },
    { path: 'applications', component: TableListComponent},
    { path: 'calendar', component: CalendarComponent },
    { path: 'achievements-focus', component: AchievementFocusComponent},
    { path: 'risks-mitigations', component: RisksMitigationsComponent},
    { path: 'observations', component: ObservationsComponent}
];
