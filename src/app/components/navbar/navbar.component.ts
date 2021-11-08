import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;

  constructor(private appService: AppService) { }

  ngOnInit(): void { }

  toggleSidebarPin() {
    this.appService.toggleSidebarPin();
  }
  
  toggleSidebar() {
    this.appService.toggleSidebar();
  }

}
