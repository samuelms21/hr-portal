import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EmployeeDataComponent } from './admin/employee-data/employee-data.component';
import { EmployeeDetailComponent } from './admin/employee-data/employee-detail/employee-detail.component';
import { AddEditEmployeeComponent } from './admin/employee-data/add-edit-employee/add-edit-employee.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StaffComponent } from './staff/staff.component';
import { EmployeeLeaveConfirmationComponent } from './admin/employee-leave-confirmation/employee-leave-confirmation.component';
import { EmployeeLeaveAllComponent } from './admin/employee-leave-all/employee-leave-all.component';
import { EmployeeLeaveReportComponent } from './admin/employee-leave-report/employee-leave-report.component';
import { SettingsHolidayComponent } from './admin/settings-holiday/settings-holiday.component';
import { SettingsLeaveLimitComponent } from './admin/settings-leave-limit/settings-leave-limit.component';
import { SettingsPermitCategoryComponent } from './admin/settings-permit-category/settings-permit-category.component';
import { StaffDashboardComponent } from './staff/staff-dashboard/staff-dashboard.component';
import { StaffInfoComponent } from './staff/staff-info/staff-info.component';
import { StaffLeaveFormComponent } from './staff/staff-leave-form/staff-leave-form.component';
import { StaffLeaveHistoryComponent } from './staff/staff-leave-history/staff-leave-history.component';
import { StaffPermitFormComponent } from './staff/staff-permit-form/staff-permit-form.component';
import { StaffPermitHistoryComponent } from './staff/staff-permit-history/staff-permit-history.component';
import { NgIconsModule } from '@ng-icons/core';

import { matHome, matPeople, matSettings, matKeyboardArrowDown } from '@ng-icons/material-icons/baseline';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AdminDashboardComponent,
    EmployeeDataComponent,
    EmployeeDetailComponent,
    AddEditEmployeeComponent,
    HeaderComponent,
    SidebarComponent,
    StaffComponent,
    EmployeeLeaveConfirmationComponent,
    EmployeeLeaveAllComponent,
    EmployeeLeaveReportComponent,
    SettingsHolidayComponent,
    SettingsLeaveLimitComponent,
    SettingsPermitCategoryComponent,
    StaffDashboardComponent,
    StaffInfoComponent,
    StaffLeaveFormComponent,
    StaffLeaveHistoryComponent,
    StaffPermitFormComponent,
    StaffPermitHistoryComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    NgIconsModule.withIcons({ matHome, matPeople, matSettings, matKeyboardArrowDown }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
