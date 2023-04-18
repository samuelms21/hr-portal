import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsHolidayComponent } from './settings-holiday.component';

describe('SettingsHolidayComponent', () => {
  let component: SettingsHolidayComponent;
  let fixture: ComponentFixture<SettingsHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsHolidayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
