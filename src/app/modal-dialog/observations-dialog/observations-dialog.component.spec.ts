import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationsDialogComponent } from './observations-dialog.component';

describe('ObservationsDialogComponent', () => {
  let component: ObservationsDialogComponent;
  let fixture: ComponentFixture<ObservationsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
