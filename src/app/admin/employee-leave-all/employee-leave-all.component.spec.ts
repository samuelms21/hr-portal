import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveAllComponent } from './employee-leave-all.component';

describe('EmployeeLeaveAllComponent', () => {
  let component: EmployeeLeaveAllComponent;
  let fixture: ComponentFixture<EmployeeLeaveAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLeaveAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLeaveAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
