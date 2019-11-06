import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { UserService } from 'app/services/user.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl()
  });

  constructor(
     public dialogRef: MatDialogRef<LoginDialogComponent>,
     public userService: UserService
  ) { }

  ngOnInit() {}

  onSubmit() {
    this.userService.authenticate(this.form.value);
    this.userService.isAdmin$.subscribe( val => {
      if(val) {
        this.onClose();
      } else {
        this.form.setErrors({'isAdmin': false});
        console.log('this.form', this.form, this.form.errors.hasOwnProperty('isAdmin'));
      }
    })
  }

  onClose() {
    this.dialogRef.close();
  }
}
