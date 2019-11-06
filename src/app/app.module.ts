import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { ApplicationAddComponent } from './modal-dialog/application-add/application-add.component';
import { ApplicationEditComponent } from './modal-dialog/application-edit/application-edit.component';
import { ObservationsDialogComponent } from './modal-dialog/observations-dialog/observations-dialog.component';
import { RiskDialogComponent } from './modal-dialog/risk-dialog/risk-dialog.component';
import { AchievementDialogComponent } from './modal-dialog/achievement-dialog/achievement-dialog.component';
import { FocusDialogComponent } from './modal-dialog/focus-dialog/focus-dialog.component';
import { LoginDialogComponent } from './modal-dialog/login-dialog/login-dialog.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ApplicationAddComponent,
    ApplicationEditComponent,
    ObservationsDialogComponent,
    RiskDialogComponent,
    AchievementDialogComponent,
    FocusDialogComponent,
    LoginDialogComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ApplicationAddComponent,
    ApplicationEditComponent,
    ObservationsDialogComponent,
    RiskDialogComponent,
    AchievementDialogComponent,
    FocusDialogComponent,
    LoginDialogComponent
  ]
})
export class AppModule { }
