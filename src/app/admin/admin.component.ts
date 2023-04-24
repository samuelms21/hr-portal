import { Component } from '@angular/core';
import { SidebarItem } from '../models/sidebar-item';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  sidebarItems: SidebarItem[] = [
    {
      title: 'Beranda',
      icon: 'matHome',
      route: '/',
    },
    {
      title: 'Data Karyawan',
      icon: 'matPeople',
      route: '/employee-data',
    },
    {
      title: 'Data Cuti',
      icon: 'matPeople',
      route: '#',
      children: [
        {
          title: 'Menunggu Persetujuan',
          route: '/employee-leave/confirmation',
        },
        {
          title: 'Semua Data',
          route: '/employee-leave/all',
        },
        {
          title: 'Laporan',
          route: '/employee-leave/report',
        },
      ],
    },
    {
      title: 'Data Izin',
      icon: 'matPeople',
      route: '#',
      children: [
        {
          title: 'Menunggu Persetujuan',
          route: '/employee-leave/confirmation',
        },
        {
          title: 'Semua Data',
          route: '/employee-leave/all',
        },
        {
          title: 'Laporan',
          route: '/employee-leave/report',
        },
      ],
    },
    {
      title: 'Settings',
      icon: 'matSettings',
      route: '#',
      children: [
        {
          title: 'Hari Libur',
          route: '/settings/holiday',
        },
        {
          title: 'Jumlah Cuti',
          route: '/settings/leave-limit',
        },
        {
          title: 'Kategori Izin',
          route: '/settings/permit-category',
        },
      ],
    },
  ];
}
