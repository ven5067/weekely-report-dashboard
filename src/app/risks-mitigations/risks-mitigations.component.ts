import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/services/dashboard.service';
import { RiskDialogComponent } from 'app/modal-dialog/risk-dialog/risk-dialog.component';
import { MatDialog } from '@angular/material';
import { AchievementService } from 'app/services/achievement.service';
import { AchievementDialogComponent } from 'app/modal-dialog/achievement-dialog/achievement-dialog.component';
import { RiskService } from 'app/services/risk.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-risks-mitigations',
  templateUrl: './risks-mitigations.component.html',
  styleUrls: ['./risks-mitigations.component.scss']
})
export class RisksMitigationsComponent {

  risks$;
  objectKeys = Object.keys;


  constructor(
    public dialog: MatDialog,
    public riskService: RiskService,
    public userService: UserService
  ) {
    this.risks$ = this.riskService.risks$;
  }

  public isArray(val) {
    return Array.isArray(val);
  } 

  openRiskDialog(){
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(RiskDialogComponent, {
      width: '600px',
      data: {
        action: 'Add'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editRiskDialog(event){
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(RiskDialogComponent, {
      width: '600px',
      data: {
        action: 'Edit',
        data: event
      }
    });
  }

  deleteRisk(id) {
    this.riskService.delete(id);
  }

}
