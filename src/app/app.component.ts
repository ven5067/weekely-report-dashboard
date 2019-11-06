import { Component} from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { ObservationsService } from './services/observations.service';
import { AchievementService } from './services/achievement.service';
import { RiskService } from './services/risk.service';
import { FocusService } from './services/focus.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private dashboardService: DashboardService,
    private observationsService: ObservationsService,
    private achievementService: AchievementService,
    private riskService: RiskService,
    private focusService: FocusService
  ) {
    this.dashboardService.fetchApplications();
    this.dashboardService.fetchDashboard();
    this.observationsService.fetchObservations();
    this.achievementService.fetchAchievements();
    this.riskService.fetchRisks();
    this.focusService.fetchFocusList();
  }
}
