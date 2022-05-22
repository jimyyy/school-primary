import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { PushNotificationService } from 'src/app/services/push-notification.service';

@Component({
  selector: 'app-dashboardenseignant',
  templateUrl: './dashboardenseignant.component.html',
  styleUrls: ['./dashboardenseignant.component.css']
})
export class DashboardenseignantComponent  {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  connectedUser:any;
  title:any;
  id:any;
  notification:any;
  badgeCount:number;
  mynotification:any=[];
  connected=false;

  constructor(private observer:BreakpointObserver,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private notifications:PushNotificationService) {

      this.badgeCount=0;
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

    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser")|| "[]");
   

    this.notifications.getnotifications().subscribe(
      (data) => { //data howa retour taa requete//
        console.log(data.notification);
        this.notification = data.notification;
       

        for (let i = 0; i < this.notification.length; i++) {
          if(this.notification[i].idEnseignant==this.connectedUser._id){
            this.mynotification.push(this.notification[i]);
            
          }
          
          
        }
        for (let i = 0; i < this.notification.length; i++) {
          if(this.notification[i].type==="notif to enseignant"){
            this.badgeCount = this.notification.length;

          }
          
          
        }
       
        
       






      })


  }

  logout() {
    localStorage.removeItem("connectedUser");
    this.router.navigate(['']);
  }

  profile(id: any) {
    this.id = this.connectedUser._id
    this.router.navigate([`profilens/${this.id}`]);

  }
  deletenotif(id: any) {


    this.notifications.deletenotification(id).subscribe(
      (data) => {
        console.log(data.message);
        location.reload();
       
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

  clearCount() {
    this.badgeCount = 0;
  }  

  reload(){
    location.reload();
  }

}
