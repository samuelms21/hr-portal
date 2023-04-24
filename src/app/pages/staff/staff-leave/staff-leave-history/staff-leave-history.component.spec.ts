import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLeaveHistoryComponent } from './staff-leave-history.component';

describe('StaffLeaveHistoryComponent', () => {
  let component: StaffLeaveHistoryComponent;
  let fixture: ComponentFixture<StaffLeaveHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffLeaveHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffLeaveHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
