import { Component, OnInit } from '@angular/core';
import { AchievementService } from 'app/services/achievement.service';
import { MatDialog } from '@angular/material';
import { FocusService } from 'app/services/focus.service';
import { AchievementDialogComponent } from 'app/modal-dialog/achievement-dialog/achievement-dialog.component';
import { FocusDialogComponent } from 'app/modal-dialog/focus-dialog/focus-dialog.component';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-achievement-focus',
  templateUrl: './achievement-focus.component.html',
  styleUrls: ['./achievement-focus.component.scss']
})
export class AchievementFocusComponent {

  achievements$;
  focusList$;
  objectKeys = Object.keys;
  currentTab: string = 'Achievements';


  constructor(
    private achievementService: AchievementService,
    public dialog: MatDialog,
    public focusService: FocusService,
    public userService: UserService
  ) {
    this.achievements$ = this.achievementService.achievements$;
    this.focusList$ = this.focusService.focusList$;
  }

  public isArray(val) {
    return Array.isArray(val);
  } 

  openDialog() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(AchievementDialogComponent, {
      width: '600px',
      data: {
        action: 'Add'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openFocusDialog(){
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(FocusDialogComponent, {
      width: '600px',
      data: {
        action: 'Add'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editFocusDialog(event){
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(FocusDialogComponent, {
      width: '600px',
      data: {
        action: 'Edit',
        data: event
      }
    });
  }

  editDialog(event) {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(AchievementDialogComponent, {
      width: '600px',
      data: {
        action: 'Edit',
        data: event
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  delete(id) {
    this.achievementService.delete(id);
  }

  deleteFocus(id) {
    this.focusService.delete(id);
  }

  onTab(val) {
    this.currentTab = val;
  }

}
