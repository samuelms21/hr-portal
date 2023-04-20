import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EmployeeDataComponent } from './admin/employee-data/employee-data.component';
import { EmployeeLeaveConfirmationComponent } from './admin/employee-leave-confirmation/employee-leave-confirmation.component';
import { EmployeeLeaveAllComponent } from './admin/employee-leave-all/employee-leave-all.component';
import { EmployeeLeaveReportComponent } from './admin/employee-leave-report/employee-leave-report.component';
import { SettingsHolidayComponent } from './admin/settings-holiday/settings-holiday.component';
import { SettingsLeaveLimitComponent } from './admin/settings-leave-limit/settings-leave-limit.component';
import { SettingsPermitCategoryComponent } from './admin/settings-permit-category/settings-permit-category.component';
import { StaffComponent } from './staff/staff.component';
import { StaffDashboardComponent } from './staff/staff-dashboard/staff-dashboard.component';
import { StaffInfoComponent } from './staff/staff-info/staff-info.component';
import { StaffLeaveFormComponent } from './staff/staff-leave-form/staff-leave-form.component';
import { StaffLeaveHistoryComponent } from './staff/staff-leave-history/staff-leave-history.component';
import { StaffPermitFormComponent } from './staff/staff-permit-form/staff-permit-form.component';
import { StaffPermitHistoryComponent } from './staff/staff-permit-history/staff-permit-history.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
      },
      {
        path: 'employee-data',
        component: EmployeeDataComponent,
      },
      {
        path: 'employee-leave-confirmation',
        component: EmployeeLeaveConfirmationComponent,
      },
      {
        path: 'employee-leave-all',
        component: EmployeeLeaveAllComponent,
      },
      {
        path: 'employee-leave-report',
        component: EmployeeLeaveReportComponent,
      },
      {
        path: 'settings-holiday',
        component: SettingsHolidayComponent,
      },
      {
        path: 'settings-leave-limit',
        component: SettingsLeaveLimitComponent,
      },
      {
        path: 'settings-permit-category',
        component: SettingsPermitCategoryComponent,
      },
    ],
  },
  {
    path: 'staff',
    component: StaffComponent,
    children: [
      {
        path: '',
        component: StaffDashboardComponent,
      },
      {
        path: 'info',
        component: StaffInfoComponent,
      },
      {
        path: 'leave-form',
        component: StaffLeaveFormComponent,
      },
      {
        path: 'leave-history',
        component: StaffLeaveHistoryComponent,
      },
      {
        path: 'permit-form',
        component: StaffPermitFormComponent,
      },
      {
        path: 'permit-history',
        component: StaffPermitHistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
