import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePermitReportComponent } from './employee-permit-report.component';

describe('EmployeePermitReportComponent', () => {
  let component: EmployeePermitReportComponent;
  let fixture: ComponentFixture<EmployeePermitReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePermitReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePermitReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
