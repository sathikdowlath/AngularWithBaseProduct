import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Management';
  screenWidth: number;

  @ViewChild(MatSidenav, { static: true }) sideNav: MatSidenav;
  constructor() {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  };

  toggleSidenav() {
    this.sideNav.toggle();
  }
}
