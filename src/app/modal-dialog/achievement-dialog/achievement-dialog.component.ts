import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AchievementService } from 'app/services/achievement.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-achievement-dialog',
  templateUrl: './achievement-dialog.component.html',
  styleUrls: ['./achievement-dialog.component.scss']
})
export class AchievementDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AchievementDialogComponent>, 
    private achievementService: AchievementService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id:[''],
      achievement: [''],
    });

    if(this.data.action === 'Edit') {
      this.form.patchValue(this.data.data);
    }
  }

  onSubmit() {
    console.log('this.form**', this.form.value);
    if(this.data.action === 'Edit') {
      this.achievementService.updateAchievement(this.form.value);
    } else {
      this.achievementService.postAchievement(this.form.value);
    }

    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
