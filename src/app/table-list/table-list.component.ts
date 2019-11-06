import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/services/dashboard.service';
import { APPLICATION_TABLE_HEADERS } from 'app/shared/headers-utility'
import { MatDialog } from '@angular/material';
import { ApplicationAddComponent } from 'app/modal-dialog/application-add/application-add.component';
import { ApplicationEditComponent } from 'app/modal-dialog/application-edit/application-edit.component';
import { UserService } from 'app/services/user.service';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  applications: any = [];
  headers: string[] = APPLICATION_TABLE_HEADERS;

  constructor(
    private dashboardService: DashboardService,
    public dialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.dashboardService.application$.subscribe((applications) => {
      console.log(applications);
      this.applications = applications;
    });
  }
  
  openDialog() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ApplicationAddComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditDialog(event: any) {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ApplicationEditComponent, {
      width: '600px',
      data: event
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  delete(id) {
    this.dashboardService.deleteApplication(id);
  }

}
