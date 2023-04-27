import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveConfirmationComponent } from './employee-leave-confirmation.component';

describe('EmployeeLeaveConfirmationComponent', () => {
  let component: EmployeeLeaveConfirmationComponent;
  let fixture: ComponentFixture<EmployeeLeaveConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLeaveConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLeaveConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
