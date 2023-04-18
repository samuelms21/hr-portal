import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLeaveFormComponent } from './staff-leave-form.component';

describe('StaffLeaveFormComponent', () => {
  let component: StaffLeaveFormComponent;
  let fixture: ComponentFixture<StaffLeaveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffLeaveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffLeaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
