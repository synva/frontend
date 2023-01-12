import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sp-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent {
  @Output() sidenavClose = new EventEmitter();

  constructor() {}

  closeSidenav() {
    this.sidenavClose.emit();
  }
}
