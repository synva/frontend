import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'ng-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  sidebarOpen = false;
  @ViewChild('appBody') private appBody?: ElementRef;
  @ViewChild('sidenav') private sidenav?: MatSidenav;

  constructor(public userService: UserService) {}

  closeSide() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }
}
