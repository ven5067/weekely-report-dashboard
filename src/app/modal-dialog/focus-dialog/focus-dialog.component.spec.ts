import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusDialogComponent } from './focus-dialog.component';

describe('FocusDialogComponent', () => {
  let component: FocusDialogComponent;
  let fixture: ComponentFixture<FocusDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
