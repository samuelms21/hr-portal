import { Component } from '@angular/core';
import { SidebarItem } from 'src/app/models/sidebar-item.model';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  sidebarItems: SidebarItem[] = [
    {
      title: 'Beranda',
      icon: 'matHome',
      route: '/staff',
    },
    {
      title: 'Pengisian Data',
      icon: 'matPeople',
      route: 'info',
    },
    {
      title: 'Cuti',
      icon: 'matPeople',
      route: 'javascript:void(0)',
      children: [
        {
          title: 'Form Cuti',
          route: 'staff-leave/form',
        },
        {
          title: 'Riwayat Pengajuan',
          route: 'staff-leave/history',
        },
      ],
    },
    {
      title: 'Izin',
      icon: 'matPeople',
      route: 'javascript:void(0)',
      children: [
        {
          title: 'Form Izin',
          route: 'staff-permit/form',
        },
        {
          title: 'Riwayat Pengajuan',
          route: 'staff-permit/history',
        },
      ],
    },
  ];
}
