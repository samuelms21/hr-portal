import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPermitHistoryComponent } from './staff-permit-history.component';

describe('StaffPermitHistoryComponent', () => {
  let component: StaffPermitHistoryComponent;
  let fixture: ComponentFixture<StaffPermitHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffPermitHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffPermitHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
