import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePermitConfirmationComponent } from './employee-permit-confirmation.component';

describe('EmployeePermitConfirmationComponent', () => {
  let component: EmployeePermitConfirmationComponent;
  let fixture: ComponentFixture<EmployeePermitConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePermitConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePermitConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
