import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisksMitigationsComponent } from './risks-mitigations.component';

describe('RisksMitigationsComponent', () => {
  let component: RisksMitigationsComponent;
  let fixture: ComponentFixture<RisksMitigationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisksMitigationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisksMitigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
