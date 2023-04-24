import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePermitAllComponent } from './employee-permit-all.component';

describe('EmployeePermitAllComponent', () => {
  let component: EmployeePermitAllComponent;
  let fixture: ComponentFixture<EmployeePermitAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePermitAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePermitAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
