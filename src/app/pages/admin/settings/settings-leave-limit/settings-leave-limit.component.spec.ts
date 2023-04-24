import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLeaveLimitComponent } from './settings-leave-limit.component';

describe('SettingsLeaveLimitComponent', () => {
  let component: SettingsLeaveLimitComponent;
  let fixture: ComponentFixture<SettingsLeaveLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsLeaveLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsLeaveLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
