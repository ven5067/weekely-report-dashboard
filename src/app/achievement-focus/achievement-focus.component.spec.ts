import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementFocusComponent } from './achievement-focus.component';

describe('AchievementFocusComponent', () => {
  let component: AchievementFocusComponent;
  let fixture: ComponentFixture<AchievementFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
