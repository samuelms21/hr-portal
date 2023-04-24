import { Component } from '@angular/core';
import { SidebarItem } from '../models/sidebar-item';

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
      route: '/',
    },
    {
      title: 'Pengisian Data',
      icon: 'matPeople',
      route: '/staff-leave-form',
    },
    {
      title: 'Cuti',
      icon: 'matPeople',
      route: '#',
      children: [
        {
          title: 'Form Cuti',
          route: '/employee-leave/confirmation',
        },
        {
          title: 'Riwayat Pengajuan',
          route: '/employee-leave/all',
        },
      ],
    },
    {
      title: 'Izin',
      icon: 'matPeople',
      route: '#',
      children: [
        {
          title: 'Form Izin',
          route: '/employee-leave/confirmation',
        },
        {
          title: 'Riwayat Pengajuan',
          route: '/employee-leave/all',
        },
      ],
    },
  ];
}
