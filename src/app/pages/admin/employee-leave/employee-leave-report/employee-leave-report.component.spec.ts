import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveReportComponent } from './employee-leave-report.component';

describe('EmployeeLeaveReportComponent', () => {
  let component: EmployeeLeaveReportComponent;
  let fixture: ComponentFixture<EmployeeLeaveReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLeaveReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLeaveReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
