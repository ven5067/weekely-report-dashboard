import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from 'app/services/dashboard.service';

@Component({
  selector: 'app-application-add',
  templateUrl: './application-add.component.html',
  styleUrls: ['./application-add.component.scss']
})
export class ApplicationAddComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(''),
    session: new FormControl(0),
    documentation: new FormControl(0),
    shadowSupport: new FormControl(0),
    reverseKT: new FormControl(0)
  });

  constructor(public dialogRef: MatDialogRef<ApplicationAddComponent>, public dashboardService: DashboardService) { }

  ngOnInit() {}

  onSubmit() {
    console.warn(this.form.value);
    this.dashboardService.postApplication(this.form.value);
    this.onClose();
  }

  onClose() {
    this.dialogRef.close();
  }
}
