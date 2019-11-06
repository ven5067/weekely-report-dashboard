import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FocusService } from 'app/services/focus.service';

@Component({
  selector: 'app-focus-dialog',
  templateUrl: './focus-dialog.component.html',
  styleUrls: ['./focus-dialog.component.scss']
})
export class FocusDialogComponent implements OnInit {
  
  public form: FormGroup;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FocusDialogComponent>, 
    private focusService: FocusService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id:[''],
      focus: [''],
    });

    if(this.data.action === 'Edit') {
      this.form.patchValue(this.data.data);
    }
  }

  onSubmit() {
    console.log('this.form**', this.form.value);
    if(this.data.action === 'Edit') {
      this.focusService.updateFocus(this.form.value);
    } else {
      this.focusService.postFocus(this.form.value);
    }

    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
