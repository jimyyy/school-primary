import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router, Routes } from '@angular/router';
import { PushNotificationService } from 'src/app/services/push-notification.service';




@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  id: any;
  title: any;
  connectedUser: any;
  connected: any = false;
  notification: any;
  badgeCount: number;
  isLoading = false;
  mynotifications:any=[];



  constructor(private observer: BreakpointObserver, private router: Router, private notifications: PushNotificationService) {
    this.badgeCount = 0;
  }

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

    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser") || "[]");


    this.notifications.getnotifications().subscribe(
      (data) => {
        console.log(data.notification);
        this.notification = data.notification;
        
        

        this.notification.sort((a, b) => {
          return <any>new Date(b.date) - <any>new Date(a.date);




        })
        for (let i = 0; i < this.notification.length; i++) {
          if(this.notification[i].type==="notif to admin"){
            this.mynotifications.push(this.notification[i])
            this.badgeCount = this.mynotifications.length;
  
          }
          
          
        }
      });
     










  }
  clearCount() {
    this.badgeCount = 0;




  }





  ajouterenseignant(title: any) {
    this.title = "ajouterenseignant";
    this.router.navigate([`inscription/${this.title}`]);
  }

  ajoutereleve(title: any) {
    this.title = "ajoutereleve";
    this.router.navigate([`preins/${this.title}`]);
  }
  profile(id: any) {
    this.id = this.connectedUser._id
    this.router.navigate([`profilens/${this.id}`]);

  }

  logout() {
    localStorage.removeItem("connectedUser");
    this.router.navigate(['']);
  }

  deletenotif(id: any) {


    this.notifications.deletenotification(id).subscribe(
      (data) => {
        console.log(data.message);
        this.notifications.getnotifications().subscribe(
          (data) => {
            console.log(data.notification);
            this.notification = data.notification;

          })
      })

  }

  updatestatus(notif) {
    notif.status = "lue";
    this.notifications.updatestatus(notif).subscribe(
      (data) => {
        console.log(data.message);

      }
    )

  }

  reload() {

    location.reload();
  }



}
