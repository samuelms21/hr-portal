import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EmployeeDataComponent } from './admin/employee-data/employee-data.component';
import { EmployeeLeaveConfirmationComponent } from './admin/employee-leave/employee-leave-confirmation/employee-leave-confirmation.component';
import { EmployeeLeaveAllComponent } from './admin/employee-leave/employee-leave-all/employee-leave-all.component';
import { EmployeeLeaveReportComponent } from './admin/employee-leave/employee-leave-report/employee-leave-report.component';
import { SettingsHolidayComponent } from './admin/settings/settings-holiday/settings-holiday.component';
import { SettingsLeaveLimitComponent } from './admin/settings/settings-leave-limit/settings-leave-limit.component';
import { SettingsPermitCategoryComponent } from './admin/settings/settings-permit-category/settings-permit-category.component';

import { StaffComponent } from './staff/staff.component';
import { StaffDashboardComponent } from './staff/staff-dashboard/staff-dashboard.component';
import { StaffInfoComponent } from './staff/staff-info/staff-info.component';
import { StaffLeaveFormComponent } from './staff/staff-leave/staff-leave-form/staff-leave-form.component';
import { StaffLeaveHistoryComponent } from './staff/staff-leave/staff-leave-history/staff-leave-history.component';
import { StaffPermitFormComponent } from './staff/staff-permit/staff-permit-form/staff-permit-form.component';
import { StaffPermitHistoryComponent } from './staff/staff-permit/staff-permit-history/staff-permit-history.component';
import { EmployeeLeaveComponent } from './admin/employee-leave/employee-leave.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { EmployeePermitComponent } from './admin/employee-permit/employee-permit.component';
import { EmployeePermitConfirmationComponent } from './admin/employee-permit/employee-permit-confirmation/employee-permit-confirmation.component';
import { EmployeePermitAllComponent } from './admin/employee-permit/employee-permit-all/employee-permit-all.component';
import { EmployeePermitReportComponent } from './admin/employee-permit/employee-permit-report/employee-permit-report.component';
import { StaffLeaveComponent } from './staff/staff-leave/staff-leave.component';
import { StaffPermitComponent } from './staff/staff-permit/staff-permit.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'admin',
  //   pathMatch: 'full',
  // },
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
        path: 'employee-permit',
        component: EmployeePermitComponent,
        children: [
          {
            path: 'confirmation',
            component: EmployeePermitConfirmationComponent,
          },
          {
            path: 'all',
            component: EmployeePermitAllComponent,
          },
          {
            path: 'report',
            component: EmployeePermitReportComponent,
          },
        ],
      },
      {
        path: 'employee-leave',
        component: EmployeeLeaveComponent,
        children: [
          {
            path: 'confirmation',
            component: EmployeeLeaveConfirmationComponent,
          },
          {
            path: 'all',
            component: EmployeeLeaveAllComponent,
          },
          {
            path: 'report',
            component: EmployeeLeaveReportComponent,
          },
        ],
      },

      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          {
            path: 'holiday',
            component: SettingsHolidayComponent,
          },
          {
            path: 'leave-limit',
            component: SettingsLeaveLimitComponent,
          },
          {
            path: 'permit-category',
            component: SettingsPermitCategoryComponent,
          },
        ],
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
        path: 'staff-leave',
        component: StaffLeaveComponent,
        children: [
          {
            path: 'form',
            component: StaffLeaveFormComponent,
          },
          {
            path: 'history',
            component: StaffLeaveHistoryComponent,
          },
        ],
      },
      {
        path: 'staff-permit',
        component: StaffPermitComponent,
        children: [
          {
            path: 'form',
            component: StaffPermitFormComponent,
          },
          {
            path: 'history',
            component: StaffPermitHistoryComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
