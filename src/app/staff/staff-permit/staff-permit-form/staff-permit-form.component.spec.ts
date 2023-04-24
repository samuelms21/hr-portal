import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPermitFormComponent } from './staff-permit-form.component';

describe('StaffPermitFormComponent', () => {
  let component: StaffPermitFormComponent;
  let fixture: ComponentFixture<StaffPermitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffPermitFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffPermitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
