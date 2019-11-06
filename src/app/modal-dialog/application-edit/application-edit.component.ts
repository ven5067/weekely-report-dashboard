import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DashboardService } from 'app/services/dashboard.service';


@Component({
  selector: 'app-application-edit',
  templateUrl: './application-edit.component.html',
  styleUrls: ['./application-edit.component.scss']
})
export class ApplicationEditComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    session: new FormControl(0),
    documentation: new FormControl(0),
    shadowSupport: new FormControl(0),
    reverseKT: new FormControl(0)
  });

  constructor(
      public dialogRef: MatDialogRef<ApplicationEditComponent>,
      public dashboardService: DashboardService,
      @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('data**', this.data);
    this.form.patchValue(this.data);
  }

  onSubmit() {
    console.warn(this.form.value);
    this.dashboardService.updateApplication(this.form.value);
    this.onClose();
  }

  onClose() {
    this.dialogRef.close();
  }

}
