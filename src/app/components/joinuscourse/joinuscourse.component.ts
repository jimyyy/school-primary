import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseonlineService } from 'src/app/services/courseonline.service';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-joinuscourse',
  templateUrl: './joinuscourse.component.html',
  styleUrls: ['./joinuscourse.component.css']
})
export class JoinuscourseComponent implements OnInit {

  onlineform: FormGroup;
  courseonlines: any;
  submitted=false;

  constructor(private formbuilder: FormBuilder, private userService: UserService,
    private courseonlineService:CourseonlineService,
    private notification: PushNotificationService
  ) { }

  ngOnInit(): void {

    this.onlineform = this.formbuilder.group({

      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mdp: ['', [Validators.required]],
      tel: ['', [Validators.required]],




      idcourseonline: ['', [Validators.required]],

    });


    this.courseonlineService.getcours().subscribe(
      (data) => {
        console.log(data.courseonlines);
        this.courseonlines = data.courseonlines;



      });
  }

  get f() { return this.onlineform.controls; }


  inscrit(c: any) {
    this.submitted=true;

    if (this.onlineform.invalid) {
      return Swal.fire({
        title: 'Error!',
        text: 'if faut remplir les champs ',
        icon: 'error',
        confirmButtonText: 'ok',
        showCancelButton: true
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'votre données à été ajouté avec success',
        showConfirmButton: false,
        timer: 1500
      })


      c.type = "onlineuser";
      c.status = "en attente";
      c.priorite="non";
      console.log("onlineuser", c)



      this.userService.createonlineuser(c).subscribe(
        (data) => {
          console.log(data.message);
          this.onlineform.reset();
        });
        c.title = "préinscription eleves en attente  ";
        c.date = new Date();
        c.status = "non lu";
        c.type = "notif to admin"

        this.notification.createnotif(c).subscribe(
          (data) => {
            console.log(data.message);
          });
    }













  }



}
