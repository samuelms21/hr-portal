import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPermitCategoryComponent } from './settings-permit-category.component';

describe('SettingsPermitCategoryComponent', () => {
  let component: SettingsPermitCategoryComponent;
  let fixture: ComponentFixture<SettingsPermitCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPermitCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsPermitCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
