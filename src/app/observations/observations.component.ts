import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/services/dashboard.service';
import * as R from 'ramda';
import { MatDialog } from '@angular/material';
import { ObservationsDialogComponent } from 'app/modal-dialog/observations-dialog/observations-dialog.component';
import { ObservationsService } from 'app/services/observations.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.scss']
})
export class ObservationsComponent implements OnInit {

  observations$;

  constructor(
    private observationService: ObservationsService,
    public dialog: MatDialog,
    public userService: UserService
  ) {
    this.observations$ = this.observationService.observations$;
   }

  ngOnInit() {}

  openDialog() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ObservationsDialogComponent, {
      width: '600px',
      data: {
        action: 'Add'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditDialog(event) {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ObservationsDialogComponent, {
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
    this.observationService.delete(id);
  }

}
