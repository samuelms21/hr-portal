import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPermitComponent } from './staff-permit.component';

describe('StaffPermitComponent', () => {
  let component: StaffPermitComponent;
  let fixture: ComponentFixture<StaffPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffPermitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
