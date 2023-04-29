import { Input, inject } from '@angular/core';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { SidebarItem } from 'src/app/models/sidebar-item.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

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
export class SidebarComponent implements OnInit {
  @Input() sidebarItems: SidebarItem[] = [];

  auth = inject(AuthService);
  route = inject(Router);

  user: User = {
    display_name: '',
    division: '',
    photo: '/assets/images/users/placeholder-user.jpg',
  };

  ngOnInit(): void {
    this.auth.getUserInfo().subscribe((user) => {
      console.log('user', user);
      this.user = user;
    });
  }

  toggleSubmenu(i: number) {
    this.sidebarItems[i].show = !this.sidebarItems[i].show;
  }

  logout() {
    this.auth.logout();
    this.route.navigateByUrl('/login');
  }
}
