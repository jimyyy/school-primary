import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardeleve',
  templateUrl: './dashboardeleve.component.html',
  styleUrls: ['./dashboardeleve.component.css']
})
export class DashboardeleveComponent  {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  title:any;
  id:any;
  connectedUser:any;

  constructor(private observer:BreakpointObserver ,private router:Router) { }

  ngAfterViewInit() {

    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });

    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser")|| "[]");



  }

  profile(id: any) {
    this.id = this.connectedUser._id
    this.router.navigate([`profileleve/${this.id}`]);

  }





  logout(){
    localStorage.removeItem("connectedUser");
    this.router.navigate(['']);
  }

}
