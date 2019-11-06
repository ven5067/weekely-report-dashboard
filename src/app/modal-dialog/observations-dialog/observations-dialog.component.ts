import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as R from 'ramda';
import { ObservationsService } from 'app/services/observations.service';

@Component({
  selector: 'app-observations-dialog',
  templateUrl: './observations-dialog.component.html',
  styleUrls: ['./observations-dialog.component.scss']
})
export class ObservationsDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ObservationsDialogComponent>, 
    private observationsService: ObservationsService,
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.form = this.fb.group({
      id:[],
      name: [''],
      observations: this.fb.array([])
    });
  }

  onSubmit() {
    if(this.data.action === 'Edit') {
      this.observationsService.updateObservation(this.form.value);
    } else {
      this.observationsService.postObservation(this.form.value);
    }
    this.closeDialog();
  }

  public form: FormGroup;

  ngOnInit() {
    if( this.data.action === 'Edit') {
      this.form.patchValue(this.data.data);

      this.data.data.observations.forEach(element => {
        this.formArr.push(this.fb.group({
          observation: [element]
        }));
      });
    }
  }

  getPairs(arr: string[]) {
    return R.map(val => R.assoc('observation', val, {}), arr);
  }

  get formArr() {
    return this.form.get('observations') as FormArray;
  }

  addNewRow() {
    this.formArr.push(this.fb.group({
      observation: ['']
    }));
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
