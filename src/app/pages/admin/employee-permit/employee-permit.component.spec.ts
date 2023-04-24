import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePermitComponent } from './employee-permit.component';

describe('EmployeePermitComponent', () => {
  let component: EmployeePermitComponent;
  let fixture: ComponentFixture<EmployeePermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePermitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
