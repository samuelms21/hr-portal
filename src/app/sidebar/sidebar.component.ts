import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  profilePictureUrl = 'https://picsum.photos/200/300';
  isCutiOpen = false

  toggleCuti(){
    this.isCutiOpen = !this.isCutiOpen
  }
  isIzinOpen = false

  toggleIzin(){
    this.isIzinOpen = !this.isIzinOpen
  }
}
