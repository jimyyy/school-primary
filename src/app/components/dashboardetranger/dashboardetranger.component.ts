import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardetranger',
  templateUrl: './dashboardetranger.component.html',
  styleUrls: ['./dashboardetranger.component.css']
})
export class DashboardetrangerComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  title: any;
  id: any;
  connectedUser: any;

  constructor(private observer: BreakpointObserver, private router: Router) { }

  ngAfterViewInit(): void {

    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });

    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser") || "[]");
  }

  profile(id: any) {
    this.id = this.connectedUser._id
    this.router.navigate([`profilens/${this.id}`]);

  }





  logout() {
    localStorage.removeItem("connectedUser");
    this.router.navigate(['']);
  }

}
