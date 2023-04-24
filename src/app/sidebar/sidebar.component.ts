import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { SidebarItem } from '../models/sidebar-item';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() profilePictureUrl = '/assets/images/users/placeholder-user.jpg';
  @Input() sidebarItems: SidebarItem[] = [];

}
