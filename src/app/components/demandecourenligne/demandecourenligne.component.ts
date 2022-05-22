import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseonlineService } from 'src/app/services/courseonline.service';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demandecourenligne',
  templateUrl: './demandecourenligne.component.html',
  styleUrls: ['./demandecourenligne.component.css']
})
export class DemandecourenligneComponent implements OnInit {
  demandeForm: FormGroup;
  user: any = {};
  id: any;
  courseonlines: any;

  constructor(private formbuilder: FormBuilder, 
    private userService: UserService,
     private courseonlineService: CourseonlineService,
     private notifications: PushNotificationService,) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("connectedUser") || "[]");
    this.demandeForm = this.formbuilder.group({

      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],

      tel: ['', [Validators.required]],




      cours: ['', [Validators.required]],

    });






    this.courseonlineService.getcours().subscribe(
      (data) => {
        console.log(data.courseonlines);
        this.courseonlines = data.courseonlines;



      });



  }

  Add() {








    let connectedUser = JSON.parse(localStorage.getItem("connectedUser"));

    this.user.idetranger = connectedUser._id;







    this.user.type = "onlineuser";
    this.user.status = "en attente";

    this.user.priorite = "oui"
    console.log("onlineuser", this.user)



    this.userService.createonlineuser(this.user).subscribe(
      (data) => {
        console.log(data.message);
        this.demandeForm.reset();
      });
      this.user.title = "Préinscription de cours enligne  ";
        this.user.date = new Date();
        this.user.status = "non lu";
        this.user.type = "notif to admin"
  
        this.notifications.createnotif(this.user).subscribe(
          (data) => {
            console.log(data.message);
          });

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'votre données à été ajouté avec success',
        showConfirmButton: false,
        timer: 1500
      })














  }


}
