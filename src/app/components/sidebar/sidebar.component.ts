import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { SidebarItem } from 'src/app/models/sidebar-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slideDownAnimation', [
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('300ms ease-out', style({ height: '0', opacity: 0 })),
      ]),
    ]),
  ],
})
export class SidebarComponent {
  @Input() profilePictureUrl = '/assets/images/users/placeholder-user.jpg';
  @Input() sidebarItems: SidebarItem[] = [];

  toggleSubmenu(i: number) {
    this.sidebarItems[i].show = !this.sidebarItems[i].show;
  }
}
