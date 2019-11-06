import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RiskService } from 'app/services/risk.service'

@Component({
  selector: 'app-risk-dialog',
  templateUrl: './risk-dialog.component.html',
  styleUrls: ['./risk-dialog.component.scss']
})
export class RiskDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RiskDialogComponent>, 
    private riskService: RiskService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id:[],
      area: [''],
      riskDetails: [''],
      impact: [0],
      migrationPlan: ['']
    });

    console.log('this.data**', this.data);
    if( this.data.action === 'Edit') {
      this.form.patchValue(this.data.data);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    if( this.data.action === 'Edit') {
      this.riskService.updateRisk(this.form.value);
    } else {
      this.riskService.postRisk(this.form.value);
    }

    this.closeDialog();
  }

}
