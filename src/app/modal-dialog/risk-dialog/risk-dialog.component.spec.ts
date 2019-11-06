import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskDialogComponent } from './risk-dialog.component';

describe('RiskDialogComponent', () => {
  let component: RiskDialogComponent;
  let fixture: ComponentFixture<RiskDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
