import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  toggleSidebarPin() {
    this.appService.toggleSidebarPin();
  }
  
  toggleSidebar() {
    this.appService.toggleSidebar();
  }

}
